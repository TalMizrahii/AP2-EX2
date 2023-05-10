function MsgScrollerGood({children}) {
    return (
        <div className="pt-3 pe-3" data-mdb-perfect-scrollbar="true"
             style={{position: 'relative', height: '400px'}}>
            {children}
        </div>
    );
}

export default MsgScrollerGood;