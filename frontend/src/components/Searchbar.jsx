const Searchbar = ({ FaAngleRight }) => {
    return (
        <nav>
            <form className='input-group'>
                <input type="search" className='form-control rounded'
                    placeholder='Search for an IP Address or Domain' />
                <button type='button' className='btn btn-dark'>
                    <FaAngleRight />
                </button>
            </form>
        </nav>
    );
}

export default Searchbar;