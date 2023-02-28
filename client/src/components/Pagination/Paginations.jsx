import style from "./Pagination.module.css";

const Paginations = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  const pages = [];
  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const handleClick = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className={style.container}>
      {pages.map((page, index) => {
        return (
          <button
            className={style.button}
            key={index}
            onClick={() => handleClick(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Paginations;
