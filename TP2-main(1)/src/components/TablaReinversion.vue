<template>
  <table class="green-table">
    <caption>
      <h3>Montos a recibir tras reinvertir el capital</h3>
    </caption>
    <thead>
      <tr>
        <th>Período</th>
        <th>Monto inicial</th>
        <th>Monto final</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>10000</td>
        <td>10333.33</td>
      </tr>
      <tr>
        <td>2</td>
        <td>10333.33</td>
        <td>10677,77</td>
      </tr>
      <tr>
        <td>3</td>
        <td>10677,77</td>
        <td>11033,69</td>
      </tr>
      <tr>
        <td>4</td>
        <td>11033,69</td>
        <td>11401,48</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name:'TablaReinversion',
  props:{
    montoReinvertirFinal:{
      type: Array,
      required:true
    },
    montoReinvertirInicial:{
      type:Array,
      required:true
    }
  }
}
</script>


<style scoped>
table.green-table {
  border: 6px solid #24943a;
  background-color: #d4eed1;
  width: 40%;
  text-align: center;
  margin: auto;
  margin-top: 20px;
}
table.green-table td,
table.green-table th {
  border: 1px solid #24943a;
  padding: 3px 2px;
}
table.green-table tbody td {
  font-size: 13px;
}
table.green-table thead {
  background: #24943a;
  background: -moz-linear-gradient(top, #5baf6b 0%, #3a9e4d 66%, #24943a 100%);
  background: -webkit-linear-gradient(
    top,
    #5baf6b 0%,
    #3a9e4d 66%,
    #24943a 100%
  );
  background: linear-gradient(to bottom, #5baf6b 0%, #3a9e4d 66%, #24943a 100%);
  border-bottom: 0px solid #444444;
}
table.green-table thead th {
  font-size: 19px;
  font-weight: bold;
  color: #f0f0f0;
  text-align: left;
  border-left: 2px solid #24943a;
}
table.green-table thead th:first-child {
  border-left: none;
}

table.green-table tfoot {
  font-size: 13px;
  font-weight: bold;
  color: #f0f0f0;
  background: #24943a;
  background: -moz-linear-gradient(top, #5baf6b 0%, #3a9e4d 66%, #24943a 100%);
  background: -webkit-linear-gradient(
    top,
    #5baf6b 0%,
    #3a9e4d 66%,
    #24943a 100%
  );
  background: linear-gradient(to bottom, #5baf6b 0%, #3a9e4d 66%, #24943a 100%);
  border-top: 1px solid #24943a;
}
table.green-table tfoot td {
  font-size: 13px;
}
table.green-table tfoot .links {
  text-align: right;
}
table.green-table tfoot .links a {
  display: inline-block;
  background: #ffffff;
  color: #24943a;
  padding: 2px 8px;
  border-radius: 5px;
}
</style>
