import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from "@nebular/theme";
interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  orderId: number;
  generatedTo: string;
  date: string;
  totalPrice?: number;
}

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"]
})
export class OrderComponent implements OnInit {
  orderTableColumns =["orderId", "generatedTo", "date", "totalPrice"];
  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;


  stocksData: any = [];
  brandSelectedArray: any = [];
  isbrand: boolean;
  selectCatArray: any = [];
  isCatgory: boolean;
  userOrderDetails: any = [];
  selectedOrderData: any;
  showOrder: boolean;

  constructor(private dataservice: DataService, private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {

  }

  ngOnInit() {
    this.getStocks();
    this.getAllOrders();
  }
  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }
  getStocks() {
    this.dataservice.getStockes().subscribe(data => {
      this.stocksData = data;
      console.log("result coming from stocks service", this.stocksData);
    }, err => {
      console.log("err coming from stocks service", err)
    })
  }
  selectBrand(value) {
    this.brandSelectedArray = [];;
    for (let obj of this.stocksData) {
      if (obj["brand_Name"] == value) {
        this.brandSelectedArray.push(obj);
      }
    }
    this.isbrand = true;


  }
  selectCat(selectCategory) {
    this.selectCatArray = [];
    console.log("selectCategory", selectCategory);
    for (let obj of this.brandSelectedArray) {
      if (obj["category_Name"] == selectCategory) {
        this.selectCatArray.push(obj);
      }
    }
    this.isCatgory = true;
    console.log("this.selectCatArray", this.selectCatArray)
  }

  getAllOrders() {
    this.dataservice.getAllOrders().subscribe((data: any[]) => {
      this.userOrderDetails = data;
      const orderDetails = new Array();
      for (const obj of data) {
        orderDetails.push({ data: obj });
      }
      this.dataSource = this.dataSourceBuilder.create(orderDetails);
    }, err => {
      console.log(" this.userOrderDetails", err)
    })
  }

  selectedOrder(value) {
    this.selectedOrderData = value;
    this.showOrder = true;
    console.log(" this.selectedOrderData", this.selectedOrderData['data']);
  }

}



