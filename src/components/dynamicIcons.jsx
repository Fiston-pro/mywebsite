import { FaPython, FaReact, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiJavascript } from "react-icons/si";

function DynamicIcons({ technologies }) {
  console.log("DynamicIcons");
  console.log(technologies);
  return (
    <div className="flex items-center my-3">
      <h3 className="text-gray-500 mr-2" >Technologies: </h3>
      <div className="text-primary text-5xl flex flex-row">
        {technologies.map((technology, index) => {
          switch (technology) {
            case "React":
              return (
                <div className="flex flex-col justify-center items-center">
                  <FaReact className="" key={index} />
                  <p className="text-gray-500 text-xs">React</p>
                </div>
              );
            case "Python":
              return (
                <div className="flex flex-col justify-center items-center">
                  <FaPython className="" key={index} />
                  <p className="text-gray-500 text-xs">Python</p>
                </div>
              );
            case "TypeScript":
              return (
                <div className="flex flex-col justify-center items-center">
                  <SiTypescript className="" key={index} />
                  <p className="text-gray-500 text-xs">TypeScript</p>
                </div>
              );
            case "JavaScript":
              return (
                <div className="flex flex-col justify-center items-center">
                  <SiJavascript className="" key={index} />
                  <p className="text-gray-500 text-xs">JavaScript</p>
                </div>
              );
            case "Next.js":
              return (
                <div className="flex flex-col justify-center items-center">
                  <SiNextdotjs className="" key={index} />
                  <p className="text-gray-500 text-xs">Next.js</p>
                </div>
              );
            case "AWS":
              return (
                <div className="flex flex-col justify-center items-center">
                  <FaAws className="" key={index} />
                  <p className="text-gray-500 text-xs">AWS</p>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}

export default DynamicIcons;
