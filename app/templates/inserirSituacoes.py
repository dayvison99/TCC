{% extends 'base.html' %}

{% block content %}

<div class="jumbotron"><center>
<fieldset class="fieldset-border">
  <legend class="legend-border"><h4> Cadastro de Usuários </h4></legend>
  <form action="" method="post" class="form">


 DADOS PESSOAIS
  
  <table class="table">
    <thead>
      <tr class="success">
          <th>
          {% for table in tables %}
            <h2>{{titles[loop.index]}}</h2></p>
          {{ table|safe }}</th>
        </tr>
        {% endfor %}
      </tbody>
    </table>
      </div>
    </div>
  <!--Fim do codigo-->
</center></div>

</fieldset


{% endblock %}
