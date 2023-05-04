import React, { useEffect } from "react";
import { pic1 } from "../assets/image/image";
import AOS from "aos";
import "aos/dist/aos.css";

function MainBody() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>
        <div>
      <h1 className="text-white ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
        rerum iste facere consectetur ullam dolor odit, modi minima ea, ipsum
        officia necessitatibus illum? Quaerat atque possimus nihil voluptatibus
        minima tempora.
      </h1>
      <h1 className="text-white ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
        eligendi commodi quisquam a unde minima, porro accusamus laudantium
        recusandae blanditiis excepturi eveniet amet enim, aliquid esse
        obcaecati quia? Eius, quasi.
      </h1>
      <h1 className="text-white ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, sequi!
      </h1>
      <h1 className="text-white ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo tempore
        sint hic tempora dolorum culpa omnis fuga porro, ipsam fugiat?
      </h1>
      <h1 className="text-white ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt?
      </h1>
      <h1 className="text-white ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nihil
        veritatis. Nam, corporis cupiditate repudiandae iure similique alias
        quae, voluptatibus, omnis unde sunt eius libero officia veritatis
        voluptatum tenetur deserunt!
      </h1>
      <h1 className="text-white ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
        rerum iste facere consectetur ullam dolor odit, modi minima ea, ipsum
        officia necessitatibus illum? Quaerat atque possimus nihil voluptatibus
        minima tempora.
      </h1>
      <h1 className="text-white ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
        eligendi commodi quisquam a unde minima, porro accusamus laudantium
        recusandae blanditiis excepturi eveniet amet enim, aliquid esse
        obcaecati quia? Eius, quasi.
      </h1>
      <h1 className="text-white ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, sequi!
      </h1>
      <h1 className="text-white ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo tempore
        sint hic tempora dolorum culpa omnis fuga porro, ipsam fugiat?
      </h1>
      <h1 className="text-white ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt?
      </h1>
      <h1 className="text-white ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nihil
        veritatis. Nam, corporis cupiditate repudiandae iure similique alias
        quae, voluptatibus, omnis unde sunt eius libero officia veritatis
        voluptatum tenetur deserunt!
      </h1>
      <h1 className="text-white ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
        rerum iste facere consectetur ullam dolor odit, modi minima ea, ipsum
        officia necessitatibus illum? Quaerat atque possimus nihil voluptatibus
        minima tempora.
      </h1>
      <h1 className="text-white ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
        eligendi commodi quisquam a unde minima, porro accusamus laudantium
        recusandae blanditiis excepturi eveniet amet enim, aliquid esse
        obcaecati quia? Eius, quasi.
      </h1>
      <h1 className="text-white ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, sequi!
      </h1>
      <h1 className="text-white ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo tempore
        sint hic tempora dolorum culpa omnis fuga porro, ipsam fugiat?
      </h1>
      <h1 className="text-white ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt?
      </h1>
      <h1 className="text-white ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nihil
        veritatis. Nam, corporis cupiditate repudiandae iure similique alias
        quae, voluptatibus, omnis unde sunt eius libero officia veritatis
        voluptatum tenetur deserunt!
      </h1>
      </div>
      <div className="flex items-center justify-between">
      <div data-aos="flip-right">
          <div className="w-[50%] h-[50%]">
            <img src={pic1} className="w-full h-full" />
          </div>
        </div>
        <div data-aos="zoom-in">
          <div className="w-[50%] h-[50%]">
            <img src={pic1} className="w-full h-full" />
          </div>
        </div>
        <div data-aos="flip-right">
          <div className="w-[50%] h-[50%]">
            <img src={pic1} className="w-full h-full" />
          </div>
        </div>
        </div>
      <div className=" ">
        <h1 className="text-white ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          rerum iste facere consectetur ullam dolor odit, modi minima ea, ipsum
          officia necessitatibus illum? Quaerat atque possimus nihil
          voluptatibus minima tempora.
        </h1>
        <h1 className="text-white ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
          eligendi commodi quisquam a unde minima, porro accusamus laudantium
          recusandae blanditiis excepturi eveniet amet enim, aliquid esse
          obcaecati quia? Eius, quasi.
        </h1>
       
        <h1 className="text-white ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, sequi!
        </h1>
        <h1 className="text-white ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo tempore
          sint hic tempora dolorum culpa omnis fuga porro, ipsam fugiat?
        </h1>
        <h1 className="text-white ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt?
        </h1>
        <h1 className="text-white ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nihil
          veritatis. Nam, corporis cupiditate repudiandae iure similique alias
          quae, voluptatibus, omnis unde sunt eius libero officia veritatis
          voluptatum tenetur deserunt!
        </h1>
        <h1 className="text-white ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          rerum iste facere consectetur ullam dolor odit, modi minima ea, ipsum
          officia necessitatibus illum? Quaerat atque possimus nihil
          voluptatibus minima tempora.
        </h1>
        <h1 className="text-white ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
          eligendi commodi quisquam a unde minima, porro accusamus laudantium
          recusandae blanditiis excepturi eveniet amet enim, aliquid esse
          obcaecati quia? Eius, quasi.
        </h1>
        <h1 className="text-white ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, sequi!
        </h1>
        <h1 className="text-white ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo tempore
          sint hic tempora dolorum culpa omnis fuga porro, ipsam fugiat?
        </h1>
        <h1 className="text-white ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt?
        </h1>
        <h1 className="text-white ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, nihil
          veritatis. Nam, corporis cupiditate repudiandae iure similique alias
          quae, voluptatibus, omnis unde sunt eius libero officia veritatis
          voluptatum tenetur deserunt!
        </h1>
        <h1 className="text-white ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium
          rerum iste facere consectetur ullam dolor odit, modi minima ea, ipsum
          officia necessitatibus illum? Quaerat atque possimus nihil
          voluptatibus minima tempora.
        </h1>
        <h1 className="text-white ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
          eligendi commodi quisquam a unde minima, porro accusamus laudantium
          recusandae blanditiis excepturi eveniet amet enim, aliquid esse
          obcaecati quia? Eius, quasi.
        </h1>
        <h1 className="text-white ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, sequi!
        </h1>
        <h1 className="text-white ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo tempore
          sint hic tempora dolorum culpa omnis fuga porro, ipsam fugiat?
        </h1>
        <h1 className="text-white ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt?
        </h1>
        <h1 className="text-white ">Lorem ipsum dol</h1>
      </div>
    </div>
  );
}

export default MainBody;
