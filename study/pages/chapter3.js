import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'
import {useState} from 'react'

export default function Home() {
  const [search,setSearch] = useState()

//   var $textarea = $('#textarea');
//
// $textarea.on('keyup', function(evt){
//     var $this = $(this);
//     var height = $this.height();
//     evt.which === 13 && height < 200 ? $this.height(height+=25) : $this.addClass("md-textarea-scroll");
// });
  // js

  // let ans = fetch(URL)
  // let anns= "bstrhftf"

  return (
    <>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="styles.css"/>
        <title>survey form </title>

        <div class="bg-[url('/st-table.jpg')] min-h-full w-full flex flex-row h-screen bg-cover">

        <nav class="w-32 z-3 bg-indigo-500 h-full opacity-20 pl-5" id="mySidebar"><br/>

          <div class="bg-indigo-500">
            <h1 class="text-xl pb-10 text-white"><b>Chapters</b></h1>
          </div>
          <div class=" flex flex-col space-between-4">
            <a name = "1" href="" onclick="w3_close()" class="pb-2 text-white">Chapter 1</a>
            <a name = "2" href="" onclick="w3_close()" class="pb-2 text-white">Chapter 2</a>
            <a name = "3" href="" onclick="w3_close()" class="pb-2 text-white">Chapter 3</a>
            <a name = "4" href="" onclick="w3_close()" class="pb-2 text-white">Chapter 4</a>
            <a name = "5" href="" onclick="w3_close()" class="pb-2 text-white">Chapter 5</a>
            <a name = "6" href="" onclick="w3_close()" class="pb-2 text-white">Chapter 6</a>
          </div>
        </nav>
        <div class="w-full h-full backdrop-blur-sm flex flex-col justify-center items-center ">

        <form id="form" class="w-180 bg-blue-400 pl-3 pt-2 pr-3 pb-2 rounded-md ">

            <div class="flex flex-col">
                <label class = "pg-2" for="name" id="label-name">Enter Your Question</label>

                <input type="text" id="name" name = "qus" placeholder="Search" required/>

            </div>
        </form>
        <div class="overflow-auto pt-5">
          <div class="col-md-6">
              <div class="md-form">
                  <textarea type="text" id="textarea" name = "ans" class="md-textarea"></textarea>
                  <label for="textarea"></label>
              </div>
          </div>
        </div>
        </div>

        </div>

    </>
  )
}
