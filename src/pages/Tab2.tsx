import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonTextarea,
  IonButton,
} from "@ionic/react";
import "./Tab2.css";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Formulario de Repositorio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Formulario de Repositorio</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="form-container">
          <IonInput
            className="form-field"
            label="Nombre del Repositorio"
            labelPlacement="floating"
            fill="outline"
            placeholder="android-proyect"
          />
          <IonTextarea
            className="form-field"
            label="Descripción del Repositorio"
            labelPlacement="floating"
            fill="outline"
            placeholder="Descripción del proyecto"
            rows={6}
          />
          <IonButton className="form-field" expand="block">
            Enviar
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
