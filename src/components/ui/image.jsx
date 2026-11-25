import * as React from "react"
import { cn } from "../../lib/utils"

/**
 * Plain <img> that fills its box like a cover-cropped background.
 * The sizing props below are accepted and ignored so existing call sites keep working.
 */
const Image = React.forwardRef(
  (
    {
      src,
      className,
      fittingType = "fill",
      // eslint-disable-next-line no-unused-vars
      originWidth, originHeight, focalPointX, focalPointY, quality,
      ...props
    },
    ref
  ) => (
    <img
      ref={ref}
      src={src}
      loading="lazy"
      decoding="async"
      className={cn(fittingType === "fit" ? "object-contain" : "object-cover", className)}
      {...props}
    />
  )
)
Image.displayName = "Image"

export { Image }
