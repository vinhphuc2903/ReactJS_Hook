//useEffect() with fake ChatApp
/*Used:
1. Update Dom
2. Call API
3. Listen DOM events
4. Clearnup
    useEffect(callback)
    useEffect(callback,[])
    useEffect(callback,[deps])//phia sau ko bat buoc: dependences
*/
/*
1. 
    Callback luon duoc goi sau khi component mounted
    Goi callback moi khi component  re-render
    goi callback sau khi component them element vao dom
2/ useEffect(callback, [])
    Chi goi callback 1 lan sau khi coponent mounted
*/
import { useEffect, useState } from "react"

// 2.useEffect(callback)
// function Test(){
//     const [title, setTitle] = useState('')
//     const [posts, setPost] = useState([])
//     //
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(res =>res.json())
//         .then(posts=>{
//             setPost(posts)
//         })
//     },[])
    

//     return(
//         <div>
//             <input
//                 value={title}
//                 onChange = {e =>setTitle(e.target.value)}
//             />
//             <ul>
                
//                     {posts.map(post=>(
//                         <li key={post.id}>{post.title}</li>
//                     ))}
                
//             </ul>
//         </div>
        
//     )
// }
// 3,useEffect(callback, [deps])
// - callback se duoc goi lai moi khi deps thay doi
//Listen dom event
// - Scroll: cuon trang
//clearup function: luon duoc goi truoc khi component duoc unmount
// - Resize: thay doi trang web
// const tabs = ['posts','comments','albums']
// function Test(){
//     const [title, setTitle] = useState('')
//     const [posts, setPost] = useState([])
//     const [type, setType] = useState('posts')

//     const [showGoToTop, setShowGoToTop] = useState(false)
//     //
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/'+type)
//         .then(res =>res.json())
//         .then(posts=>{
//             setPost(posts)
//         })
//     },[type])
//     //
//     useEffect(()=>{
//         const handleScroll =() =>{
//             setShowGoToTop(window.scrollY >=200);
//         }
//         window.addEventListener('scroll',handleScroll)
//         return() =>{
//             window.removeEventListener('scroll',handleScroll)
//         }
//     }, [])

//     return(
//         <div>
//         {tabs.map(tab =>(
//             <button 
//                 key={tab}
//                 style={type === tab ? 
//                 {
//                     color: '#fff',
//                     backgroundColor: '#333',
//                 } : {}}
//                 onClick={() => setType(tab)}
//             >
//                 {tab}
//             </button>
//         ))}
//             <input
//                 value={title}
//                 onChange = {e =>setTitle(e.target.value)}
//             />
//             <ul>
                
//                     {posts.map(post=>(
//                         <li key={post.id}>{post.title || post.name}</li>
//                     ))}
                
//             </ul>
//             {showGoToTop &&(
//                 <button
//                    style={{
//                        position: 'fixed',
//                        right: 20,
//                        bottom: 20
//                    }} 
//                 >
//                     Go To Top
//                 </button>
//             )}
//         </div>
        
//     )
// }
//
function Test(){
    // const[width, setWidth] = useState(window.innerWidth)
    // useEffect(()=>{
    //     const handleResize = () =>{
    //         setWidth(window.innerWidth)
    //     }
    //     window.addEventListener('resize', handleResize)
    //     //clearup function
    //     return () =>{
    //         window.removeEventListener('resize', handleResize)
    //     }
    // }, [])
    // return (
    //     <div>
    //         <h1>{width}</h1>
    //     </div>
    // )

    //xay dung ung dung dem nguoc theo s
    // const [time, setTime] = useState(180)
    
    // useEffect(()=>{
        
    //     const timerID = setInterval(()=>{
    //         setTime(preState=> preState - 1)
    //     }, 1000)
    //     return() => {
    //         clearInterval(timerID);
    //     }
    // },[])
    // return (
    //     <div>
    //         <h1>{time}</h1>
    //     </div>
    // )
    //3. clearup function luon duoc goi truoc khi callback duoc goi tru lan mounted
    // const [avatar, setAvatar] = useState()
    // useEffect(()=>{
    //     return () =>{
    //         avatar && URL.revokeObjectURL(avatar.preview)
    //     }
    // },[avatar])
    // const handlePreviewAvatar = (e) =>{
    //     const file = e.target.files[0]
    //     file.preview = URL.createObjectURL(file)
    //     setAvatar(file)
    //     return () =>{
    //         e.target.files[0]
    //     }
    // }
    // return (
    //     <div>
    //         <input 
    //         type = "file"
    //         onChange={handlePreviewAvatar}
    //         />
    //         {avatar &&(
    //             <img src = {avatar.preview} alt="" width = "80%" />
    //         )}
    //     </div>
    // )
    const lessons = [
        {
            id: 'lesson-1',
            value: 'ReactJS la gi? Tai sao ne hoc ReactJS'
        },
        {
            id: 'lesson-2',
            value: 'SPA/MPA la gi'
        },
        {
            id: 'lesson-3',
            value: 'Arrow function'
        },
    ]
    const [lessonID, setLessonID] = useState('lesson-1')
    useEffect(()=>{
            const handleComment = ({detail}) =>
            {
                //console.log('xxx'+{detail});
                console.log(`xxxx${detail}`)
            }
            window.addEventListener('lesson-1',handleComment);
        return () =>{
            window.removeEventListener('lesson-'+{lessonID}, handleComment)
        }
        },[lessonID])
    return(
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                    key ={lesson.id}
                    style={{
                        color: lessonID === lesson.id ?
                            'red':
                            '#333'
                    }}
                    onClick={()=>setLessonID(lesson.id)}
                    >
                        {lesson.value}
                    </li>
                    
                ))}
            </ul>
        </div>
    )
}
export default Test


