import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
} from "@ionic/react";
import "./Tab1.css";
import RepoItem from "../components/RepoItem";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Repositorios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList inset={true}>
          <RepoItem
            name="Repositorio 1"
            imageUrl="https://ionicframework.com/docs/img/demos/avatar.svg"
          ></RepoItem>
          <RepoItem
            name="Repositorio 2"
            imageUrl="https://ionicframework.com/docs/img/demos/avatar.svg"
          ></RepoItem>
          <RepoItem
            name="Repositorio 3"
            imageUrl="https://ionicframework.com/docs/img/demos/avatar.svg"
          ></RepoItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
