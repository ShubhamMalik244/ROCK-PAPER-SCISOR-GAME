export default function PlayBtn({playBtnClick, btnType}) {
  return <div onClick={playBtnClick} className={btnType}></div>;
}
