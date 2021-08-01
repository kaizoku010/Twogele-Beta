import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
    { contactImage: "https://images.pexels.com/photos/7704220/pexels-photo-7704220.jpeg?cs=srgb&dl=pexels-sinitta-leunen-7704220.jpg&fm=jpg", name: "Jessy Molla" },
    { contactImage: "https://links.papareact.com/xql", name: "Jeff Bezos" },
    { contactImage:"https://links.papareact.com/zvy", name :"Bill Gates"}
]

function Widgets() {
    return (
        <div className="hidden p-2 mb-5 lg:flex flex-col w-60">
            <div className="flex justify-between
             items-center mb-5 text-gray-500"
            >
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-2">
                    <VideoCameraIcon className="h-6" />
                    <SearchIcon className="h-6" />
                    <DotsHorizontalIcon className="h-6"/>
                </div>
            </div>

            {contacts.map((contact) => (
                <Contact
                    key={contact.src}
                    contactImage={contact.contactImage}
                    name={ contact.name}
                />
            )) }

        </div>
    )
}

export default Widgets
