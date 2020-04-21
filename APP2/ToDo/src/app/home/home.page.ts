import { Component } from '@angular/core';
import { AlertController, ActionSheetController, LoadingController } from '@ionic/angular';
import { TodoService } from '../services/todo.service';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tasks: any[] = [];
  processando: bool = false;
  constructor(private alertCtrl: AlertController,
    private utilService: UtilService,
    private actionSheetCtrl: ActionSheetController,
    private todoService: TodoService,
    private loadingCtrl: LoadingController) {

    //let taskJson = localStorage.getItem('taskDb');

    // if (taskJson != null) {
    //   this.tasks = JSON.parse(taskJson);
    // }

    this.loadTasks();
  }

  async loadTasks() {
    this.processando = true;
    let loading = await this.loadingCtrl.create({ message: "Listando tarefas" });
    loading.present();

    this.todoService.list()
      .then(async (response: any[]) => {
        this.processando = false;
        loading.dismiss();
        this.tasks = response;

      })
      .catch(async (erro) => {
        this.processando = false;
        loading.dismiss();
        this.utilService.showToast('Operação falhou!');
      });
  }

  async showAdd() {
    const alert = await this.alertCtrl.create({
      header: 'O que deseja fazer?',
      inputs: [
        {
          name: 'newTask',
          type: 'text',
          placeholder: 'Estudar Ionic'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('clicked cancel');
          }
        },
        {
          text: 'Adicionar',
          handler: (form) => {
            console.log(form.newTask);


            this.add(form.newTask);
          }
        }
      ]
    });

    await alert.present();
  }

  async add(newTask: string) {
    //VALIDA SE O USUARIO PREENCHEU A TASK
    if (newTask.trim().length < 1) {

      this.utilService.showToast('Informe o que deseja fazer!');

      return;
    }

    let task = { name: newTask, done: false };

    //this.tasks.push(task);

    let loading = await this.loadingCtrl.create({ message: "Processando..." });
    loading.present();
    this.todoService.add(task.name)
      .then(async (response) => {
        loading.dismiss();
        this.utilService.showToast('Operação realizada com sucesso!');
        this.loadTasks();

      })
      .catch(async (erro) => {
        loading.dismiss();
        this.utilService.showToast('Operação falhou!');
      });

    //this.updateLocalStorage();
  }

  updateLocalStorage() {

    localStorage.setItem('taskDb', JSON.stringify(this.tasks));
  }

  async openActions(task: any) {
    let loading = await this.loadingCtrl.create({ message: "Processando..." });
    const actionSheet = await this.actionSheetCtrl.create({
      header: "O QUE DESEJA FAZER?",
      buttons: [{
        text: task.done ? 'Desmarcar' : 'Marcar',
        icon: task.done ? 'radio-button-off' : 'checkmark-circle',
        handler: () => {
          task.done = !task.done;
          loading.present();

          this.todoService.update(task)
            .then(async (response) => {
              loading.dismiss();
              this.utilService.showToast('Operação realizada com sucesso!');

            })
            .catch(async (erro) => {
              loading.dismiss();
              this.utilService.showToast('Operação falhou!');
            });

          //this.updateLocalStorage();
        }
      }
        , {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async delete(task: any) {
    // this.tasks = this.tasks.filter(taskArray => task != taskArray);
    // this.updateLocalStorage();
    let loading = await this.loadingCtrl.create({ message: "Processando..." });
    const alert = await this.alertCtrl.create({
      header: 'Atenção!',
      message: 'Tem certeza que deseja excluír?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

          }
        }, {
          text: 'OK',
          handler: () => {

            loading.present();
            this.todoService.delete(task.id)
              .then(async (response) => {
                loading.dismiss();
                this.utilService.showToast('Operação realizada com sucesso!');

                this.loadTasks();
              })
              .catch(async (erro) => {
                loading.dismiss();
                this.utilService.showToast('Operação falhou!');
              });

          }
        }
      ]
    });

    await alert.present();



  }
}
