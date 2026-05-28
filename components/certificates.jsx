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
        <Certificate />
        <Certificate />
        <Certificate />
    </div>
}

export {Certificates}