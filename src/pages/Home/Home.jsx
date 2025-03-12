import { useSelector } from "react-redux"


export default function Home() {

  // when we can use information from store , we need useSelector , 
  // which contain a function 

  let {user} = useSelector((state)=>state.authUser);
  console.log(user)
  return (
    <div>
      Hello i am {user?.displayName} , This is home pages
    </div>
  )
}

