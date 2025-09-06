type handleMessage = {
  handleMessage: (msg: { msg: string }) => void;  
}

const ChangeM = ({ handleMessage }: handleMessage) => {
  const messages = ["oi", "Ola", "ola, tudo bem?"]

  return (
    <div>
      <button onClick={() => handleMessage({ msg: messages[0] })}>1</button>  
      <button onClick={() => handleMessage({ msg: messages[1] })}>2</button>
      <button onClick={() => handleMessage({ msg: messages[2] })}>3</button>
    </div>
  )
}

export default ChangeM