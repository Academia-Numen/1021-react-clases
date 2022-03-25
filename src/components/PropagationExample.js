function PropagationExample() {



    function eventHandler(evento) {
        evento.target.style.background = "blue";
    }
    function detenerPropagacion(evento) {
        evento.stopPropagation();
    }

    return (
        <div className="container-1" onClick={eventHandler} style={{ minWidth: 500, minHeight: 400, background: 'red' }}>
            <div className="container-2" onClick={detenerPropagacion} style={{ minWidth: 300, minHeight: 250, background: 'green' }}>
                <div className="container-3" style={{ minWidth: 150, minHeight: 120, background: 'yellow' }}>
                    <button>Press</button>
                </div>
            </div>
        </div>
    );
}

export default PropagationExample;