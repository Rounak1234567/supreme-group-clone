export default function GetInTouch() {
    return (
        <div className="bg-[#1176bb] min-h-screen text-white py-12">
            <div className="max-w-screen-xl lg:mx-40 px-6 md:px-8 flex flex-col items-center">
                {/* Heading */}
                <div className="w-full mb-12">
                    <h2 className="text-4xl md:text-5xl font-semibold">Get in touch</h2>
                    <div className="w-16 h-1 bg-white mt-2" />
                </div>

                {/* Form and Enquiry Info Section */}
                <div className="w-full flex flex-col-reverse lg:flex-row gap-16 lg:gap-0">
                    {/* Enquiry Info */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
                        <p className="text-xl mb-8">For general enquiries</p>
                        <div className="space-y-8 text-lg">
                            <div>
                                <span className="font-semibold">Address :</span>
                                <div className="mt-1 text-base md:text-lg leading-relaxed">
                                    110, 16th Road, Chembur,<br />
                                    Mumbai - 400071
                                </div>
                            </div>
                            <div>
                                <span className="font-semibold">Phone :</span>
                                <div className="mt-1 text-base md:text-lg">+91 22 25208822</div>
                            </div>
                            <div>
                                <span className="font-semibold">Email :</span>
                                <div className="mt-1 text-base md:text-lg break-all">
                                    info@supremegroup.co.in
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <form className="w-full space-y-8">
                            <input
                                id="fullname"
                                type="text"
                                className="w-full bg-transparent border-b border-white text-white text-lg py-2 focus:outline-none placeholder-white/70"
                                placeholder="Full name"
                            />
                            <input
                                id="email"
                                type="email"
                                className="w-full bg-transparent border-b border-white text-white text-lg py-2 focus:outline-none placeholder-white/70"
                                placeholder="Email"
                            />
                            <input
                                id="company"
                                type="text"
                                className="w-full bg-transparent border-b border-white text-white text-lg py-2 focus:outline-none placeholder-white/70"
                                placeholder="Company"
                            />
                            <textarea
                                id="message"
                                rows={3}
                                className="w-full bg-transparent border-b border-white text-white text-lg py-2 focus:outline-none placeholder-white/70 resize-none"
                                placeholder="Message"
                            />
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="lg:w-40 w-full h-14 border border-white rounded-full text-white text-xl font-medium hover:bg-white hover:text-[#1176bb] transition transition-colors duration-300 delay-200"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
