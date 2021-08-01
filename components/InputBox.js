import { session, useSession } from "next-auth/client"
import Image from "next/image"
import { EmojiHappyIcon } from "@heroicons/react/outline"
import { CameraIcon, VideoCameraIcon, VideoComs } from "@heroicons/react/solid"; 
import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import firebase from "firebase";

function InputBox() {
    const [session] = useSession();
    const  filePickerRef = useRef(null)
    const inputRef = useRef(null)
 //   const  inputRef = useRef(null)
    const [ImageToPost, setImageToPost] = useState(null)


    const sendPost = (e) => {
        e.preventDefault()

        if (!inputRef.current.value) return;

        db.collection("posts").add({
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp:
                firebase.firestore.FieldValue
                    .serverTimestamp(),
        }).then((doc) => { 
            if (ImageToPost) {
                const uploadTask =
                    storage.ref(`posts/${doc.id}`).putString(ImageToPost,
                        "data_url")
                removeImage()

                uploadTask.on("state_change", null,
                    (error) => console.error(error),
                    () => {
                        storage.ref('posts')
                            .child(doc.id)
                            .getDownloadURL().then(url => {
                                db.collection('posts')
                                    .doc(doc.id).set({
                                    postImage:url
                                }, {merge:true})
                             })
        
                     })
             }

      } )
   
    

        inputRef.current.value = "";


        
    }

    
    const addImageToPost = (e) => {
        const reader = new FileReader()
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }

        reader.onload = (readerEvent) => { 
        setImageToPost(readerEvent.target.result)}
            
    }


    const removeImage = () => {
        setImageToPost(null)
     }


    return (
        <div className="gb-white p-2 
        rounded-2xl shadow-md
        text-gray-500 font-medium mt-6">
            <div>
            
                <form className="flex flex-1">
                    <input className="rounded-full
                     h-12 bg-gray-100 flex-grow px-5
                     focus:outline-none"
                        type="text"
                        ref={inputRef}
                        placeholder={`Wats on your mind Master-sama?!`} />
                    <button type="submit" hidden
                        onClick={sendPost}>Over</button>
                </form>
                
                {ImageToPost && (
                    <div
                        onClick={removeImage}
                        className="flex  mr-10 flex-col filter hover:brightness-110 transition duration-150
                        transform hover:scale-105 cursor-pointer"
                    >
                        <Image  className="h-10  object-contain" height={40} width={ 40 } src={ImageToPost} alt="" />
                        <p className="text-xs text-red-500 text-center">Remove</p>
                        
                    </div>
                ) }
            
            </div>
            
            <div className="flex justify-evenly items-center p-3 border-t">

            <div className="inputIcon"> 
          
                    <VideoCameraIcon className="h-7 text-red-500" />
                <p className="text-xs sm:text-sm xl:text-base">Live Feed</p>

            </div >
            
            <div className="inputIcon" onClick={ () => filePickerRef.current.click() }>
 
                    <CameraIcon className="h-7 text-green-400"/>
                <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
                    <input ref={filePickerRef}
                        onChange={addImageToPost}
                        type="file" hidden />
                </div >
            
            <div className="inputIcon">
         
                    <EmojiHappyIcon className="h-7 text-yellow-500" />
         
                    <p className="text-xs sm:text-sm xl:text-base">Vibes</p>
 
            </div>
            </div>
                
        </div>
    )
}

export default InputBox
