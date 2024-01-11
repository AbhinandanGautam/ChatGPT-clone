import { BoltIcon, ExclamationTriangleIcon, SunIcon } from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center text-white h-screen px-2">
      <h1 className=" text-5xl font-bold mb-20">ChatGPT</h1>

      <div className="hidden sm:flex flex-row space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5 font-bold">
            <SunIcon className="w-8 h-8" />
            <h2>Examples</h2>
          </div>

          <div className=" space-y-2">
            <p className="infoText">"Explain Something to me"</p>
            <p className="infoText">
              "What is the difference between a cat and a dog?"
            </p>
            <p className="infoText">"What is color of the sun?"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5 font-bold">
            <BoltIcon className="w-8 h-8" />
            <h2>Capabilities</h2>
          </div>

          <div className=" space-y-2">
            <p className="infoText">"What is ChatGPT?"</p>
            <p className="infoText">
              "How AI will change the future of differnt fields?"
            </p>
            <p className="infoText">"What is Large Language Model (LLM)?"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5 font-bold">
            <ExclamationTriangleIcon className="w-8 h-8" />
            <h2>Limitations</h2>
          </div>

          <div className=" space-y-2">
            <p className="infoText">"Disadvantages of Artifical Intelligence"</p>
            <p className="infoText">
              "Will AI most dangerous thing in future?"
            </p>
            <p className="infoText">"Human Intelligence vs AI"</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage