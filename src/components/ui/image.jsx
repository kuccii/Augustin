import * as React from "react"
import { cn } from "../../lib/utils"

/**
 * Plain <img> that fills its box like a cover-cropped background.
 * If `src` fails to load, it switches once to `fallbackSrc`.
 * The remaining sizing props are accepted and ignored so older call sites keep working.
 */
const Image = React.forwardRef(
  (
    {
      src,
      fallbackSrc,
      className,
      fittingType = "fill",
      // eslint-disable-next-line no-unused-vars
      originWidth, originHeight, focalPointX, focalPointY, quality,
      onError,
      ...props
    },
    forwardedRef
  ) => {
    const [failed, setFailed] = React.useState(false)
    const innerRef = React.useRef(null)

    const setRef = React.useCallback(
      (node) => {
        innerRef.current = node
        if (typeof forwardedRef === "function") forwardedRef(node)
        else if (forwardedRef) forwardedRef.current = node
      },
      [forwardedRef]
    )

    // An image can fail before React hydrates, so the error event is missed: check once on mount.
    React.useEffect(() => {
      const img = innerRef.current
      if (fallbackSrc && img && img.complete && img.naturalWidth === 0) setFailed(true)
    }, [fallbackSrc, src])

    const useFallback = failed && fallbackSrc
    return (
      <img
        ref={setRef}
        src={useFallback ? fallbackSrc : src}
        loading="lazy"
        decoding="async"
        onError={(event) => {
          if (fallbackSrc && !failed) setFailed(true)
          onError?.(event)
        }}
        className={cn(fittingType === "fit" ? "object-contain" : "object-cover", className)}
        {...props}
      />
    )
  }
)
Image.displayName = "Image"

export { Image }
