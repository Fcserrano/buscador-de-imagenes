import React from "react";

const Imagen = ({imagen}) => {

  const {downloads, largeImageURL} = imagen;

  return (
    <>
      <div className="col">
        <div className="card shadow-sm">
          <img src={largeImageURL}/>

          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <a href={largeImageURL} target="_blank" className="btn btn-sm btn-outline-secondary">
                  Ver
                </a>

              </div>
              <small className="text-muted">{`${downloads} descargas`}</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Imagen;
