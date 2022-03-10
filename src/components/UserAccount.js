import {Fragment} from "react";
import Recently from "./Recently";

const UserAccount = () => {
    return (
        <Fragment>
            <h1>Daily Recommended</h1>
            <section className="flex section">
                <div className="card w-48 bg-base-100 shadow-xl card__1">
                    <div className="card-body p-2">
                        <div className="badge badge-accent">Novel</div>
                        <p>Sabtu Bersama Bapak</p>
                    </div>
                </div>
                <div className="card w-48 bg-base-100 shadow-xl card__2">
                    <div className="card-body p-2">
                        <div className="badge badge-accent">Novel</div>
                        <p>Sabtu Bersama Bapak</p>
                    </div>
                </div>
                <div className="card w-48 bg-base-100 shadow-xl card__3">
                    <div className="card-body p-2">
                        <div className="badge badge-accent">Novel</div>
                        <p>Sabtu Bersama Bapak</p>
                    </div>
                </div>
            </section>
            <Recently />
        </Fragment>
    )
}

export default UserAccount;
