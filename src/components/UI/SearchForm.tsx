import { useState, useEffect } from "react";
import "../style/SearchForm.scss";
import { BiSearch, BiX } from "react-icons/bi";
import { searchTodoAPI } from "../../service/todoAPI";
import TodoCard from "../TodoCard";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
    setSearchQuery("");
    setSearchResults([]);
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const token = JSON.parse(localStorage.getItem("token") || "{}");
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      if (token && searchQuery.trim().length > 0) {
        const reqHeader = {
          Authorization: token,
        };

        const fetchSearch = async () => {
          try {
            setIsLoading(true);
            const result = await searchTodoAPI(
              user?.id,
              searchQuery,
              reqHeader
            );
            setSearchResults(result.data);
          } catch (error) {
            console.error(error);
          } finally {
            setIsLoading(false);
          }
        };

        fetchSearch();
      } else {
        setSearchResults([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  return (
    <>
      <button className="open-modal-btn" onClick={() => setIsOpen(true)}>
        <BiSearch size={24} />
        Search Todo
      </button>

      {isOpen && (
        <div className="modal-overlay ">
          <div className=" custom-modal">
            <button className="close-modal" onClick={handleClose}>
              <BiX size={35} />
            </button>

            <form className="todo-form" onSubmit={(e) => e.preventDefault()}>
              <h2 className="form-content">
                <BiSearch className="icon" />
                Search Todos
              </h2>

              <div className="form-group">
                <input
                  type="text"
                  id="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Todo ..."
                  required
                />
              </div>
            </form>

            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <div className="search-results">
                {searchResults.length > 0 ? (
                  <ul>
                    {searchResults.map((todo) => (
                      <li key={todo.id}>
                        <TodoCard todo={todo} />
                      </li>
                    ))}
                  </ul>
                ) : (
                  searchQuery && <p>No results found.</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchForm;
