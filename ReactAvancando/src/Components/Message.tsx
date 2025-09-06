type msg = {
  msg: string;
}

const Message = ({msg}: msg) =>  {
    return (
        <div>
            <p>A menssagem é: {msg}</p>
        </div>
    )
}


export default Message