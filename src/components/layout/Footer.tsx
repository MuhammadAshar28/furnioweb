// export default function Footer(){
//     return (
//         <>
//         <footer >

//         <div className="flex justify-around gap-4 p-5 border-t-2 leading-10  border-gray-300">
//             <div className="w-[14rem]  ">
//                 <h2 className="font-bold text-[2rem]">Funiro.</h2>
//                 <p className="leading-none">400 University Drive Suite 200 Coral Gables,
//                 FL 33134 USA</p>
//             </div>


//             <div>
//                 <h4>Navbar</h4>
//                 <ul>
//                     <li>Home</li>
//                     <li>Shop</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                 </ul>
//             </div>


//             <div>
//                 <h4>Help</h4>
//                 <ul>
//                     <li>Payment Option</li>
//                     <li>Returns</li>
//                     <li>Privacy Policies</li>
//                 </ul>
//             </div>

//             <div>
//                 <h4>Newsletter</h4>
//             <input type="text" placeholder="Your Email" className="outline-none" />
//             <button type="submit" className="font-bold">SUBSCRIBE</button>
//             </div>
            
//         </div>
//         <div  className="mx-auto mt-4 w-[1000px]">

//             <hr />
//             <p className="font-normal absolute left-[13%] py-8">2023 furino. All rights reverved</p>
//         </div>
//         </footer>
//         </>
//     )

// }

// export default function Footer() {
//     return (
//       <footer>
//         <div className="flex flex-col-reverse md:flex-row justify-around gap-4 p-5 border-t-2 leading-10 border-gray-300 mt-10 sm:mt-16">
//           <div className="w-full md:w-[14rem] text-center md:text-left mb-6 sm:mb-0">
//             <h2 className="font-bold text-[2rem]">Funiro.</h2>
//             <p className="leading-none">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
//           </div>
  
//           <div className="text-center md:text-left mb-6 sm:mb-0">
//             <h4 className="font-semibold">Navbar</h4>
//             <ul className="space-y-2">
//               <li>Home</li>
//               <li>Shop</li>
//               <li>About</li>
//               <li>Contact</li>
//             </ul>
//           </div>
  
//           <div className="text-center md:text-left mb-6 sm:mb-0">
//             <h4 className="font-semibold">Help</h4>
//             <ul className="space-y-2">
//               <li>Payment Option</li>
//               <li>Returns</li>
//               <li>Privacy Policies</li>
//             </ul>
//           </div>
  
//           <div className="text-center md:text-left mb-6 sm:mb-0">
//             <h4 className="font-semibold">Newsletter</h4>
//             <div className="flex justify-center md:justify-start gap-2 items-center">
//               <input
//                 type="text"
//                 placeholder="Your Email"
//                 className="outline-none p-2 border border-gray-300 rounded-md"
//               />
//               <button
//                 type="submit"
//                 className="font-bold bg-orange-600 text-white p-2 rounded-md hover:bg-orange-700"
//               >
//                 SUBSCRIBE
//               </button>
//             </div>
//           </div>
//         </div>
  
//         <div className="mx-auto mt-8 sm:mt-12 w-full text-center md:w-[1000px]">
//           <hr />
//           <p className="font-normal py-8">2023 Funiro. All rights reserved.</p>
//         </div>
//       </footer>
//     );
//   }
  
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col-reverse md:flex-row justify-around gap-4 p-5 border-t-2 leading-10 border-gray-300 mt-10 sm:mt-16">
        <div className="w-full md:w-[14rem] text-center md:text-left mb-6 sm:mb-0">
          <h2 className="font-bold text-[2rem]">Funiro.</h2>
          <p className="leading-none">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>

        <div className="text-center md:text-left mb-6 sm:mb-0">
          <h4 className="font-semibold">Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-left mb-6 sm:mb-0">
          <h4 className="font-semibold">Help</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/payment-options">Payment Option</Link>
            </li>
            <li>
              <Link href="/returns">Returns</Link>
            </li>
            <li>
              <Link href="/privacy-policy">Privacy Policies</Link>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-left mb-6 sm:mb-0">
          <h4 className="font-semibold">Newsletter</h4>
          <div className="flex justify-center md:justify-start gap-2 items-center">
            <input
              type="text"
              placeholder="Your Email"
              className="outline-none p-2 border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className="font-bold bg-orange-600 text-white p-2 rounded-md hover:bg-orange-700"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 sm:mt-12 w-full text-center md:w-[1000px]">
        <hr />
        <p className="font-normal py-8">2023 Funiro. All rights reserved.</p>
      </div>
    </footer>
  );
}
