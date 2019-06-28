{% extends 'base.html' %}

{% block content%}

<div class="jumbotron"><center>
  <fieldset class="fieldset-border">
    <legend class="legend-border"><h3> Inserção de Situações </h3></legend>
  <br/>
  <br/>
<form action="" method="POST">
<!-- DADOS DAS SITUAÇOES DAS DISCIPLINAS-->
<fieldset>
 <table cellspacing="10">
            </tr>
              <tr>
              <td><h4>
                    <label >Disciplinas :   </label>
                  <h4>
                </td>
                    <td align="left" ><h4>

                          {%for disciplina in disciplina   %}
                          <tr class="table table-dark">
                              <td><h4>  <a href='/analise/{{ disciplina.id }}'/>{{ disciplina.nome }}</a></h4></td>
                          </tr>
                          {% endfor %}
                   </select>
                    <h4></td>
           <tr>
                <td><h4>
                    <label for="status">Status :   </label>
                </td>
                <td align="left"><h4>
                    <select name="status"  onchange="chamar()" id="status">
                              <option value="nenhum" disabled selected>-----</option>
                              <option value="APROVADO">Aprovado</option>
                              <option value="REPROVADO">Repovado</option>
                              <option value="MATRICULADO">Matriculado</option>
                              <option value="CANCELADO">Desistente</option>
                    </select>
               </td>
   </td>
  </tr>
 </table>
</fieldset>
<br />
<a href='/analise/'><button  title="Inserir! " class="btn btn-info btn-lg" type="button">ddFinalizar</button></a>

{%for disciplina in disciplina   %}
<a href='/analise/{{ disciplina.nome }}/'><button  title="Inserir! " class="btn btn-info btn-lg" type="button">Finalizar</button></a>
{% endfor %}
  <a href='/listagem/{{ disciplina.nome }}'><button  title="Inserir! " class="btn btn-info btn-lg" type="submit">INSERIR</button></a>

</form>
</center></div>
{% endblock %}
