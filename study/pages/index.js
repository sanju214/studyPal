import Head from 'next/head'
import Image from 'next/image'
import {useState} from 'react'

export default function Home() {
  const [search,setSearch] = useState()


  // js
  return (
<>

<div class="bg-[url('/st-table.jpg')] min-h-full w-full h-screen bg-cover">
<nav class="w-32 z-3 bg-indigo-500 h-full opacity-20 pl-5" id="mySidebar"><br/>

  <div class="bg-indigo-500">
    <h1 class="text-xl pb-10"><b>Chapters</b></h1>
  </div>
  <div class=" flex flex-col space-between-4">
    <a name = "1" href="chapter3" onclick="w3_close()" class="pb-2">Chapter 1</a>
    <a name = "2" href="chapter3" onclick="w3_close()" class="pb-2">Chapter 2</a>
    <a name = "3" href="chapter3" onclick="w3_close()" class="pb-2">Chapter 3</a>
    <a name = "4" href="chapter3" onclick="w3_close()" class="pb-2">Chapter 4</a>
    <a name = "5" href="chapter3" onclick="w3_close()" class="pb-2">Chapter 5</a>
    <a name = "6" href="chapter3" onclick="w3_close()" class="pb-2">Chapter 6</a>
  </div>
</nav>
</div>
</>
  )
}
