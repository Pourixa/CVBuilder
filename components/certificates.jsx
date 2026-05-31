import { Date } from "./date";

function Certificate()
{
return <div className="certificate">
    <h3>
        certificate
    </h3>
    <Date/>
</div>
}

function Certificates()
{
    return <div className="certificates">
        <h2>CERTIFICATES</h2>
        <Certificate />
    </div>
}

export {Certificates}