    // 表单中的class是不停变化的，所有给不同状态添加不同的样式
      form .ng-valid[required] {
          border: 1px solid #42A948;
      }
      form .ng-invalid {
          border: 1px solid #a94442;
      }

    // html界面
    <div class="container">
        <div class="DEMO-form-container row">
            <div class="col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
                <h2 class="text-center">angular2验证的表单</h2>
                <form class="DEMO-form" #userForm="ngForm" (ngSubmit)="handleSubmit()">
                    <div class="form-group">
                        <label for="username">姓名</label>
                        <input type="text" name="username" [(ngModel)]="user.username" class="form-control" id="username"
                               placeholder="Username" required/>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" name="email" [(ngModel)]="user.email" class="form-control" id="email"
                               placeholder="Email" required/>
                    </div>
                    <div class="form-group">
                        <label for="motto">密码</label>
                        <input type="text" name="motto" [(ngModel)]="user.motto" class="form-control" id="motto"
                               placeholder="Motto" required/>
                    </div>
                    <div class="form-group">
                        <label for="favorite">喜欢的水果</label>
                        <select id="favorite" name="favorite" class="form-control" [(ngModel)]="user.favorite">
                            <option value="apple">apple</option>
                            <option value="banana">banana</option>
                            <option value="pear">pear</option>
                            <option value="orange">orange</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-default" [disabled]="!userForm.form.valid">提交</button>
                </form>
            </div>
        </div>
    </div>
    
    // 组件
    // 定义数据类型, 如果实例化Hero对象就立马初始化数据。
    export class Hero {
        id: number;
        name: string;
        // "?" 表示这个参数在实例化的时候是可选的
        power?: string;
        alertGo?: string;
        constructor(id: number, name: string, power: string, alertGo: string) {
            this.id = id;
            this.name = name;
            this.power = power;
            this.alertGo = alertGo;
        }
    }
    
    
    import {Component} from "@angular/core";
    import {Hero} from "./hero";
    import {User} from "./user";

    @Component({
        selector: "my-app",
        templateUrl: "./templates/home.html"
    })
    export class AppComponent {
        // Data是定义的一个对象格式
        // Data[]就是对象数组
        // 定义变量
        clickMessage = "";
        data: Hero[];
        user: User;
        // 表单
        name: string;
        power: string;
        alertGo: string;


        constructor() {
            this.name = "";
            this.power = "";
            this.alertGo = "react";
            // 变量赋值
            this.data = [
                new Hero(1, "angular"),
                new Hero(2, "angular2"),
                new Hero(3, "react")
            ];
            this.user = new User("zxc", "919226088@qq.com", "123", "apple");
        }

        handleClick() {
            this.clickMessage = "单机事件";
        }
        handleEnter(searchName) {
            alert(searchName);
        }
        addInfo(id, name, power, alertGo) {
            this.data.push(
                {id, name, power, alertGo}
            )
        }

        handleSubmit() {
            alert(this.user.username + this.user.email + this.user.motto + this.user.favorite);
        }
    }
