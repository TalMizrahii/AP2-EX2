function ModalAddContactWrap({children}) {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            {children}
        </div>
    );
}

export default ModalAddContactWrap;