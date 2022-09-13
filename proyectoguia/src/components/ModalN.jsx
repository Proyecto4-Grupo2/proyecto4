import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa CSS para BS
import 'bootstrap'; 
import "../style/modal.css";
import Newsletter from './Newsletter';

function ModalN() {
    return  (
        <div className="modalbs">
            <div className="container mt-0">
                <button type="button" className="btn btn-red" data-bs-toggle="modal" data-bs-target="#myModal"></button> 
            </div>    
            <div className="modal" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <Newsletter>
                            </Newsletter>
                        </div>
                        {/* <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div> */}
                    </div>
                </div>
        </div>
        </div>
    )
}

export default ModalN;