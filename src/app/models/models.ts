import { ConductoresComponent } from "../Components/conductores/conductores.component";
import { FormsModule } from "@angular/forms";

export interface Conductor{
    conductor: {
        nombre: string;
        apellido: string;
        apodo: string;
        modelo: string;
        id: string;
    }
}