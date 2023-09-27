import svgImage from "./404.svg"
export const PageNotFound = () => {
    return (
        <>
            <img src={svgImage}
                className="error404"
                alt="Not Found Icon"
            />
        </>
    );
};
