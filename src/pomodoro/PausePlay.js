// import React from "react";
// import classNames from "../utils/class-names";

// function FocusAndBreak({
//   session,
//   focusDuration,
//   breakDuration,
//   minutesToDuration,
//   isTimerRunning,
//   handleFocusMinus,
//   handleFocusPlus,
//   handleBreakMin,
//   handleBreakPlus,
//   handleStop,
//   playPause,
// }) {
//   return (
//     <>
//       <div className="row">
//         <div className="col">
//           <div className="input-group input-group-lg mb-2">
//             <span className="input-group-text" data-testid="duration-focus">
//               {/* TODO: Update this text to display the current focus session duration */}
//               Focus Duration: {minutesToDuration(focusDuration)}
//             </span>
//             <div className="input-group-append">
//               {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-testid="decrease-focus"
//                 onClick={handleFocusMinus}
//                 disabled={focusDuration === 5 || session !== null}
//               >
//                 <span className="oi oi-minus" />
//               </button>
//               {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 data-testid="increase-focus"
//                 onClick={handleFocusPlus}
//                 disabled={focusDuration === 60 || session !== null}
//               >
//                 <span className="oi oi-plus" />
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="col">
//           <div className="float-right">
//             <div className="input-group input-group-lg mb-2">
//               <span className="input-group-text" data-testid="duration-break">
//                 {/* TODO: Update this text to display the current break session duration */}
//                 Break Duration: {minutesToDuration(breakDuration)}
//               </span>
//               <div className="input-group-append">
//                 {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   data-testid="decrease-break"
//                   onClick={handleBreakMin}
//                   disabled={breakDuration === 1 || session !== null}
//                 >
//                   <span className="oi oi-minus" />
//                 </button>
//                 {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   data-testid="increase-break"
//                   onClick={handleBreakPlus}
//                   disabled={breakDuration === 15 || session !== null}
//                 >
//                   <span className="oi oi-plus" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col">
//           <div
//             className="btn-group btn-group-lg mb-2"
//             role="group"
//             aria-label="Timer controls"
//           >
//             <button
//               type="button"
//               className="btn btn-primary"
//               data-testid="play-pause"
//               title="Start or pause timer"
//               onClick={playPause}
//             >
//               <span
//                 className={classNames({
//                   oi: true,
//                   "oi-media-play": !isTimerRunning,
//                   "oi-media-pause": isTimerRunning,
//                 })}
//               />
//             </button>
//             {/* TODO: Implement stopping the current focus or break session. and disable the stop button when there is no active session */}
//             {/* TODO: Disable the stop button when there is no active session */}
//             <button
//               type="button"
//               className="btn btn-secondary"
//               data-testid="stop"
//               title="Stop the session"
//               onClick={handleStop}
//               disabled={session === null}
//             >
//               <span className="oi oi-media-stop" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default FocusAndBreak;

import classNames from "../utils/class-names";
import React from "react";

function PausePlay({ playPause, isTimerRunning, handleStop, session }) {
  return (
    <div className="row">
      <div className="col">
        <div
          className="btn-group btn-group-lg mb-2"
          role="group"
          aria-label="Timer controls"
        >
          <button
            type="button"
            className="btn btn-primary"
            data-testid="play-pause"
            title="Start or pause timer"
            onClick={playPause}
          >
            <span
              className={classNames({
                oi: true,
                "oi-media-play": !isTimerRunning,
                "oi-media-pause": isTimerRunning,
              })}
            />
          </button>
          {/* TODO: Implement stopping the current focus or break session. and disable the stop button when there is no active session */}
          {/* TODO: Disable the stop button when there is no active session */}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="stop"
            title="Stop the session"
            onClick={handleStop}
            disabled={session === null}
          >
            <span className="oi oi-media-stop" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PausePlay;
