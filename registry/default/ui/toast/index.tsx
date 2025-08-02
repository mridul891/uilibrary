import { cva } from "class-variance-authority";
import React from "react";

// const ButtonVariants = cva("", {
// //   variants: {
// //     variant: {
// //       default: "text-white bg-black hover:bg-gray-900 border border-gray-800",
// //       destructive : "bg-red-500 hover:bg-red-600 text-white border border-red-800"
// //     },
// //     size: {
// //       default: "h-12",
// //       medium: "h-16",
// //       large: "h-20 w-30",
// //     },
// //   },
// //   defaultVariants: {
// //     variant: "default",
// //     size: "default",
// //   },
// });


interface ToastProps { 
    className ?: string , 
    message ?: string,
    // variant?: typeof ButtonVariants
}

const toast = ( {message ,className, ...props }:ToastProps) => { 
    return (
        <div className="absolute top-20 translate-x-50 border  border-black bg-gray-600 rounded-lg font-semibold text-lg text-white" {...props} >
        <p>{message}</p>
        </div>
    );
}

export default toast; 