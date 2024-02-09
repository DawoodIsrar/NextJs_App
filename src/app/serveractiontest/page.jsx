import { addPost } from "../../lib/actions";
const serveractiontest = () => {
  return (
    <>
      <form action={addPost}>
        <input placeholder="title" name="title"></input>
        <input placeholder="slug" name="slug"></input>
        <input placeholder="email" name="email"></input>
        <input placeholder="userId" name="userId"></input>
        <input placeholder="desc" name="desc"></input>
        <button>create</button>
      </form>
    </>
  );
};

export default serveractiontest;
