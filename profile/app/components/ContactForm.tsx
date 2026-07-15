'use client'

import { useState, useRef } from "react"    
import type { SubmitEventHandler } from "react"
import { FaUser, FaEnvelope, FaPhoneAlt, FaCommentDots, FaPaperPlane } from "react-icons/fa"

export default function ContactForm() {
    const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null)
    const [isPending, setIsPending] = useState(false)

    const formRef = useRef<HTMLFormElement>(null)

    const handleSubmit: SubmitEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        setIsPending(true)
        setStatus(null)

        const formData = new FormData(e.currentTarget)
        const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY; 
        
        if (!ACCESS_KEY) {
            setStatus({ success: false, message: "Error: Access Key is missing." })
            setIsPending(false)
            return
        }

        formData.append("access_key", ACCESS_KEY)

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            })

            const data = await response.json()

            if (data.success) {
                setStatus({ success: true, message: "Message sent successfully!" })
                formRef.current?.reset()
            } else {
                setStatus({ success: false, message: data.message || "Failed to send." })
            }
        } catch (error) {
            console.error("Submission error:", error)
            setStatus({ success: false, message: "Network error. Check console." })
        } finally {
            setIsPending(false)
        }
    }

    return (
        <div className="flex justify-center w-full">
            <form 
                ref={formRef} 
                onSubmit={handleSubmit} 
                className="w-full max-w-lg space-y-5 bg-linear-to-br from-gray-900/80 to-purple-950/10 backdrop-blur-md border border-purple-500/20 shadow-2xl rounded-2xl p-8 md:p-10 transition-all"
            >

                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500 group-focus-within:text-purple-400 transition-colors">
                        <FaUser className="w-4 h-4" />
                    </div>
                    <input
                        type="text" name="name" placeholder="Your Name" required disabled={isPending}
                        className="w-full bg-black/40 border border-gray-700 text-white placeholder-gray-500 py-3 pl-10 pr-4 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all disabled:opacity-50"
                    />
                </div>


                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500 group-focus-within:text-purple-400 transition-colors">
                        <FaEnvelope className="w-4 h-4" />
                    </div>
                    <input
                        type="email" name="email" placeholder="Email Address" required disabled={isPending}
                        className="w-full bg-black/40 border border-gray-700 text-white placeholder-gray-500 py-3 pl-10 pr-4 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all disabled:opacity-50"
                    />
                </div>

                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500 group-focus-within:text-purple-400 transition-colors">
                        <FaPhoneAlt className="w-4 h-4" />
                    </div>
                    <input
                        type="tel" name="tel" placeholder="Contact No" required disabled={isPending}
                        className="w-full bg-black/40 border border-gray-700 text-white placeholder-gray-500 py-3 pl-10 pr-4 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all disabled:opacity-50"
                    />
                </div>


                <div className="relative group">
                    <div className="absolute top-3.5 left-0 pl-3.5 flex items-start pointer-events-none text-gray-500 group-focus-within:text-purple-400 transition-colors">
                        <FaCommentDots className="w-4 h-4" />
                    </div>
                    <textarea
                        name="query" placeholder="Your Query..." required rows={4} disabled={isPending}
                        className="w-full bg-black/40 border border-gray-700 text-white placeholder-gray-500 py-3 pl-10 pr-4 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none disabled:opacity-50"
                    />
                </div>

                <button
                    type="submit" disabled={isPending}
                    className="w-full flex items-center justify-center gap-2 bg-purple-600/80 border border-purple-500 text-white py-3.5 rounded-lg font-bold tracking-wide hover:bg-purple-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                >
                    {isPending ? (
                        "Sending..."
                    ) : (
                        <>
                            Send Message <FaPaperPlane className="w-4 h-4" />
                        </>
                    )}
                </button>

                {status && (
                    <div className={`mt-4 p-3 rounded-lg text-center font-bold text-sm border ${status.success ? 'bg-green-900/20 border-green-500/50 text-green-400' : 'bg-red-900/20 border-red-500/50 text-red-400'}`}>
                        {status.message}
                    </div>
                )}
            </form>
        </div>
    )
}