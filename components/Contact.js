import Image from "next/image";

function Contact({ name, contactImage }) {

    return (
        <div className="flex items-center space-x-3 mb-2
        relative hover:bg-gray-200 cursor-pointer" >
            {contactImage && (
                <img
                    src={contactImage}
                    className="rounded-full"
                    objectFit="cover"
                    width={50}
                    height={50}
                    layout="fixed" />
            )}
            <p> {name}</p>
            <div className="absolute bottom-2 left-7 bg-green-400
            h-3 w-3 rounded-full animate-bounce"></div>
        </div>
    )
}

export default Contact
