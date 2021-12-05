import { motion } from "framer-motion";

export default function Loading() {
  return (<>
    <div className="loading-wrapper">
      <motion.div
        animate={{
          opacity: 1,
          rotate: '360deg',
          transition: {
            repeat: Infinity,
            duration: 5
          }
        }}
        className="loading-img-holder"
      >
        <svg xmlns="http://www.w3.org/2000/svg" style={{
          margin: 'auto', display: 'block'
        }} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
          <circle cx="50" cy="50" r="25" stroke="#494b55" strokeWidth="8" fill="none"></circle>
          <circle cx="50" cy="50" r="25" stroke="#40d1ff" strokeWidth="5" strokeLinecap="round" fill="none">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="2s" values="0 50 50;180 50 50;720 50 50" keyTimes="0;0.5;1"></animateTransform>
            <animate attributeName="stroke-dasharray" repeatCount="indefinite" dur="2s" values="18.84955592153876 169.64600329384882;94.2477796076938 94.24777960769377;18.84955592153876 169.64600329384882" keyTimes="0;0.5;1"></animate>
          </circle>
        </svg>
      </motion.div>
    </div>
  </>)
}