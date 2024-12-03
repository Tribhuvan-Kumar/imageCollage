"use client";

import AboveDiv from "@/components/aboveDiv";
import ToggleButton from "@/components/toggleButton";
import store from "@/utils/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <div className="w-screen flex overflow-hidden items-center justify-center h-screen">
        <div className="w-[98%] h-[95%] border border-yellow-400">
          <div className="w-full h-[70%] border-blue-700 border p-2 bg-gray-400">
            <AboveDiv />
          </div>
          <div className="w-full h-[30%] flex items-center justify-center">
            <ToggleButton />
          </div>
        </div>
      </div>
    </Provider>
  );
}
