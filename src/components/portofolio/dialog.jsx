import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { BiExpandAlt } from "react-icons/bi";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import DynamicIcons from "../dynamicIcons";

export default function MyModal({ data }) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="p-2 rounded-full my-1 hover:bg-primary">
        <BiExpandAlt
          onClick={() => setIsOpen(true)}
          className="text-2xl cursor-pointer"
        />
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {data.title}
                  </Dialog.Title>
                  <div className="my-3 ">
                    <div className="portfolio__item-image">
                      <AwesomeSlider
                        bullets={false}
                        media={data.images.map((image, index) => ({
                          source: image,
                        }))}
                      />
                    </div>
                    <p className="text-sm my-2 text-gray-500">{data.description}</p>
                  </div>

                  { data.technologies && <DynamicIcons technologies={data.technologies} />}

                  <div className="portfolio__item-cta">
                    {data.github && (
                      <a href={data.github} className="btn" target="_blank">
                        Github
                      </a>
                    )}
                    {data.live && (
                      <a
                        href={data.live}
                        className="btn btn-primary"
                        target="_blank"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
