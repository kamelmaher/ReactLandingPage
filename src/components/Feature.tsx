import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Feature = () => {
    return (
            <div className="mt-5 col-md-6 col-lg-4">
                <div className="feature text-center text-white">
                    <div className="mb-3 icon">
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div>
                        <h3>
                            Instant Features
                        </h3>
                        <p className="feature-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt autem debitis dolorem animi reprehenderit exercitationem similique praesentium totam.
                        </p>
                    </div>
                </div>
        </div>
    )
}

export default Feature
