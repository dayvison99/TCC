from app import app, db, lm
from flask import render_template, flash, redirect, url_for, request, session
from flask_login import login_user, logout_user, login_required
import os
from flask import Flask, Response, request, abort, render_template_string, send_from_directory
from wtforms import Form,SelectMultipleField
from app.models.forms import LoginForm
from app.models.tables import User
from app.models.tables import Periodo
from app.models.tables import Disciplina
from app.models.forms import CadastroUsuarioForm
from app.models.forms import DisciForm
from app.models.forms import AlunosFrom
from app.models.tables import Alunos
import numpy as np
import pandas as pd
app.SECRET_KEY = "secreta123"
from flask_session import Session

#importando banco de dados das disciplinas com o pandas
dados = pd.read_csv('../TCC/Analise_Pandas/dateset.csv')
disciplina_curso = pd.read_csv('../TCC/Analise_Pandas/disciplinacurso.csv')
disciplinamaiorreprovacao = pd.read_csv('../TCC/Analise_Pandas/disciplinamaiorreprovacao.csv')

##Fim importação##

#carregamento dos dados do usuario logado
@lm.user_loader
def load_user(id):
    return User.query.filter_by(id=id).first()

lm.login_view = "login"

lm.session_protection = "strong"

lm.login_message = u"Por favor insira o nome de usuário e senha para acessar !"

#lOGIN DO USUARIO
@app.route("/", methods=["GET", "POST"])
def login():
    form = LoginForm()
    if form.validate_on_submit():
        usuario = User.query.filter_by(nomeUsuario=form.username.data).first()
        if usuario and usuario.senha == form.password.data:
            login_user(usuario)
            flash("Bem Vindo!")
            return redirect(url_for('index'))
            if not is_safe_url('login.html'):
                return flask.abort(400)
        else:
            flash("Usuário ou Senha Incorretos!")
            flash("Contate o administrador do sistema caso não lembre a senha!")
    return render_template('login.html',
                            form=form)

#CRUD USUARIO CADASTAR/ALTERAR/EXCLUIR
#CADASTRO
@app.route("/cadastroUsuario", methods=["GET", "POST"])
@login_required
def cadastroUsuario():
    cadastroform = CadastroUsuarioForm()
    if request.method == 'POST' and cadastroform.validate():
        user = User(cadastroform.nome.data,cadastroform.cpf.data,cadastroform.email.data,cadastroform.celular.data,
        cadastroform.nomeUsuario.data,cadastroform.tipo.data,cadastroform.senha.data)
        usuario = User.query.all()
        cpf = User.query.filter_by(cpf=cadastroform.cpf.data).first()
        if cpf and cpf.cpf == cadastroform.cpf.data:
            flash('Cpf já cadastrado !')
            return redirect(url_for('cadastroUsuario'))

        email = User.query.filter_by(email=cadastroform.email.data).first()
        if email and email.email == cadastroform.email.data:
            flash('E-mail cadastrado!')
            return redirect(url_for('listagemUsuario'))

        celular = User.query.filter_by(celular=cadastroform.celular.data).first()
        if celular and celular.celular == cadastroform.celular.data:
            flash('Celular cadastrado !')
            return redirect(url_for('listagemUsuario'))

        nomeUsuario = User.query.filter_by(nomeUsuario=cadastroform.nomeUsuario.data).first()
        if nomeUsuario and nomeUsuario.nomeUsuario == cadastroform.nomeUsuario.data:
            flash('Nome de Usuario já cadastrado!')
            return redirect(url_for('listagemUsuario'))

        db.session.add(user)
        db.session.commit()

        flash('Usuário Cadastro com Sucesso !')
        return redirect(url_for('listagemUsuario'))
    return render_template('cadastroUsuarios.html',
                            cadastroform = cadastroform)

#EXCLUIR
@app.route("/excluirUsuario/<int:id>")
@login_required
def excluirUsuario(id):
    usuario = User.query.filter_by(id=id).first()
    db.session.delete(usuario)
    db.session.commit()
    usuarios = User.query.all()
    flash ("Dados Excluidos com Sucesso!")
    return redirect(url_for('listagemUsuario'))

#ALTERAR
@app.route("/atualizarUsuario/<int:id>", methods=["GET", "POST"])
@login_required
def atualizarUsuario(id):
    cadastroform = CadastroUsuarioForm()
    usuario = User.query.filter_by(id=id).first()
    if cadastroform.nome.data:
        usuario.nome = cadastroform.nome.data
        usuario.cpf = cadastroform.cpf.data
        usuario.email = cadastroform.email.data
        usuario.celular = cadastroform.celular.data
        usuario.nomeUsuario = cadastroform.nomeUsuario.data
        usuario.tipo = cadastroform.tipo.data
        if cadastroform.senha.data != cadastroform.confirm.data:
            flash('Senhas não cofere !')
            flash('Retorne a pagina anterior para alterar ! !')
        if cadastroform.senha.data == cadastroform.confirm.data:
            usuario.senha = cadastroform.senha.data
            db.session.commit()
            flash('Usuário Alterado com Sucesso !')
            return redirect(url_for('listagemUsuario'))
    flash('Erro ao Alterar !')
    return render_template('atualizaUsuarios.html',
                            cadastroform = cadastroform)

#esqueceu a senha
@app.route("/esqueceuSenha")
def esqueceuSenha():
    cadastroform = CadastroUsuarioForm
    return render_template('alterarSenha.html',
                            cadastroform = cadastroform)

@app.route("/alterarSenha", methods=["GET", "POST"])
def alterarSenha():
    cadastroform = CadastroUsuarioForm()
    usuario = User.query.all()
    if cadastroform.nome.data:
        if cadastroform.cpf.data != usuario.cpf:
            flash('Usuario não cadastrado')
            return redirect(url_for('alterarSenha'))
        if cadastroform.senha.data != cadastroform.confirm.data:
            flash('Senhas não cofere !')
            flash('Retorne a pagina anterior para alterar ! !')
        if cadastroform.senha.data == cadastroform.confirm.data:
            usuario.senha = cadastroform.senha.data
            db.session.commit()
            flash('Usuário Alterado com Sucesso !')
            return redirect(url_for('alterarSenha'))
    flash('Erro ao Alterar !')
    return render_template('login.html',
                            cadastroform = cadastroform)


#PAGINAS( todos os menus)
#PAGINA INICIAL
@app.route("/index")
@login_required
def index():
    return render_template('index.html')

#PAGINA DE LOGOULT
@app.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect(url_for("login"))

#PAGINA listagem De Usuarios selecionaodos
@app.route("/listagem/<int:id>")
@login_required
def listagem(id):
    usuario = User.query.filter_by(id=id)
    cadastroform = CadastroUsuarioForm()
    return render_template('atualizaUsuarios.html',usuario=usuario, cadastroform=cadastroform)

#Listagem de todos osUsuarios cadastrados no sistema
@app.route("/listagemUsuario")
@login_required
def listagemUsuario():
    usuario = User.query.all()
    return render_template('listagemUsuarios.html',usuario=usuario)

#PAGINA EXCLUIR USUARIOS
@app.route("/excluir_Usuario")
@login_required
def excluir_Usuario():
    usuario = User.query.all()
    return render_template('excluirUsuarios.html',usuario=usuario)

#PAGINA INSERIR SITUAÇOES
@app.route("/inserirSituacoes/", methods=["GET", "POST"])
@login_required
def inserirSituacoes():
    periodo = Periodo.query.all()
    disciplina = Disciplina.query.all()
    return render_template('inserirSituacoes.html', periodo=periodo, disciplina=disciplina)

@app.route("/inserir/<int:id>", methods=["GET", "POST"])
@login_required
def inserir(id):
    periodo = Periodo.query.all()
    disciplina = Disciplina.query.filter_by(periodo = id)
    return render_template('inserirSituacoes.html', periodo=periodo, disciplina=disciplina)

#PAGINA DE RELATORIOS
@app.route("/relatorios")
@login_required
def relatorios():
    return render_template('relatorios.html')

#PAGINA DE AJUDA
@app.route("/ajuda")
@login_required
def ajuda():
        return render_template('ajuda.html')

# Salvando alunos apos analise
@app.route("/listagemAlunos", methods=["GET", "POST"])
@login_required
def listagemAlunos():
    alunosform = AlunosFrom()
    if request.method == 'POST' and alunosform.validate():
        aluno = Alunos(alunosform.nome.data,alunosform.turma.data,alunosform.resultado.data)
        usuario = Alunos.query.all()
        nome = Alunos.query.filter_by(nome=alunosform.nome.data).first()
        turma = Alunos.query.filter_by(turma=alunosform.turma.data).first()
        resultado = Alunos.query.filter_by(resultado=session['resultados']).first()
        aluno.resultado = session['resultados']
        resultado = aluno.resultado
        db.session.add(aluno)
        db.session.commit()

        flash('Analise salva com Sucesso !')
        return redirect(url_for('inserirSituacoes'))
    return render_template('salvaralunos.html',
                            alunosform = alunosform)

#listando todos os alunos salvos
@app.route("/alunosAnalise/",methods=["GET", "POST"])
@login_required
def alunosAnalise():
    alunosform = AlunosFrom()
    alunos = Alunos.query.all()
    return render_template('listagemAlunos.html',alunos=alunos, alunosform=alunosform)

#listando todos os alunos com risco de evasão
@app.route("/alunosRisco/",methods=["GET", "POST"])
@login_required
def alunosRisco():
    alunosform = AlunosFrom()
    alunos = Alunos.query.all()
    alunos = Alunos.query.filter(Alunos.resultado >= 60)
    return render_template('listagemAlunos.html',alunos=alunos, alunosform=alunosform)

#Excluir lista de alunos
@app.route("/excluirAlunos/<int:id>",methods=["GET", "POST"])
@login_required
def excluirAlunos(id):
    alunos = Alunos.query.filter_by(id=id).first()
    db.session.delete(alunos)
    db.session.commit()
    alunos = Alunos.query.all()
    flash ("Dados Excluidos com Sucesso!")
    return redirect(url_for('alunosAnalise'))

##Parte da mineração de dados

#armazenado dados
@app.route("/sessao/",methods=["GET", "POST"])
@login_required
def sessao():
    lista_disciplinas = []
    periodo = Periodo.query.all()
    disciplina = Disciplina.query.all()

    if request.form.get("disciplina") and request.form.get("status") is not None:
        cont=0
        for d in disciplina:
            cont=cont+1
            id = request.form.get("disciplina")
            situacaoDisciplina = request.form.get("status")
            materias = Disciplina.query.filter_by(id = id).first()
            session["salvardisciplina"] = request.form.get("disciplina")
            session["salvarstatus"] = request.form.get("status")
        #    lista_disciplinas[0] = (session["salvardisciplina"],session["salvarstatus"])
            #flash(lista_disciplinas)
            return render_template('inserirSituacoes.html',tables=[materias.nome,session["salvarstatus"]],
            titles = ['na','Disciplinas', 'Situações'],periodo=periodo, disciplina=disciplina)

    if request.form.get("disciplina") is None:
        flash("Escolha uma Disciplina")
        return render_template('inserirSituacoes.html',
        titles = ['na'],periodo=periodo, disciplina=disciplina)
    if request.form.get("status") is None:
        flash("Escolha um Status")
        return render_template('inserirSituacoes.html',
        titles = ['na'],periodo=periodo, disciplina=disciplina)


#Analise da situaçoes com Panda e Numpy
@app.route("/analise/",methods=["GET", "POST"])
@login_required
def analise():
    if session["salvardisciplina"] and session["salvarstatus"] is not None:
        id = session["salvardisciplina"]
        situacaoDisciplina = session["salvarstatus"]
        materias = Disciplina.query.filter_by(id = id).first()
        disciplinas = [(materias.nomeData,situacaoDisciplina)]
        flash(disciplinas)
        b = []
        a = []
        c = 0
        cont=0
        for d in disciplinas:
                cont=cont+1
                probabilidadeTotal = dados.loc[(dados['disciplina']==d[0])].count()
                probabilidade = dados.loc[(dados['disciplina']==d[0]) & (dados['situacaoDisciplina']==d[1])].count()
                probabilidade= probabilidade*100
                a.append([d[0], probabilidade/probabilidadeTotal])
                prob = dados.loc[(dados['disciplina']==d[0])].count()
                for i in range(1):
                        probabilidadeTotal = dados.loc[(dados['disciplina']==d[0])].count()
                        probabilidade = dados.loc[(dados['disciplina']==d[0]) & (dados['situacaoDisciplina']==d[1])].count()
                        b = probabilidade/probabilidadeTotal*100
                        c = b+c
        flash(round(c[0]/cont, 2))
        j=round(c[0]/cont, 2)
        session["resultados"] = j
        if j > 60:
            flash("Atenção!!")
            flash("Aluno com probabilidades de acima de 60 %")
        session["salvardisciplina"] = None
        session["salvarstatus"] = None
        return render_template('analise.html',tables=[a,j],
        titles = ['na'])
        return render_template('analise.html')
    else:
        periodo = Periodo.query.all()
        disciplina = Disciplina.query.all()
        flash("Insira as Diciplinas e as Situaçoes antes de Finalizar")
        return render_template('inserirSituacoes.html',
        titles = ['na'],periodo=periodo, disciplina=disciplina)

#Arvore de decisão sobre as situaçoes das disciplinas
@app.route("/situacoes/",methods=["GET", "POST"])
@login_required
def situacoes():
        disciplinas = session["salvardisciplina"]
        situacaoDisciplina = session["salvarstatus"]
        def resultados(disciplinas): #disciplina,situacaoDisciplina
            a = []
            for d in disciplinas:
                probabilidadeTotal = dados.loc[(dados['disciplina']==d[0])].count()
                probabilidade = dados.loc[(dados['disciplina']==d[0]) & (dados['situacaoDisciplina']==d[1])].count()
                a.append([d[0], d[1], probabilidade/probabilidadeTotal])
                msg = """A probabilidade do aluno obter um determinado resultado para as seguintes disciplinas:
                |          Disciplina         |    Situação  |    Probabilidade    |"""
                for i in a:
                    msg+= '           |           {0}           |   {1}  |    {2}'.format(i[0], i[1], i[2])
                    return msg
                return render_template('inserirSituacoes.html')
        return render_template('inserirSituacoes.html')

#### Relatorios do Sistema ####

#relatorios de usuarios cadastrados
@app.route("/usuariosCadastrados")
@login_required
def usuariosCadastrados():
        usuario = User.query.order_by(User.nome).all()
        cadastroform = CadastroUsuarioForm()
        return render_template('relatorioUsuarios.html',usuario=usuario, cadastroform=cadastroform)

#Relatorios Disciplinas do curso de Tads
@app.route("/disciplinasTads")
@login_required
def disciplinasTads():
    #resultado = dados.groupby(['disciplina']).describe()
    #resultado = resultado.filter(items=['disciplina'])
    resultado = disciplina_curso.groupby(['disciplina']).max()
    resultado = resultado = resultado.sort_values(by=['periodo'])
    resultado = resultado.rename(columns={'periodo' : 'Periodo da Disciplina'})
    resultado = resultado.rename(columns={'disciplina' : 'Disciplinas'})
    return render_template('disciplinas.html',tables=[resultado.to_html(classes='table table-striped')],
    titles = ['na'])

#Situaçoes Das Disciplinas
@app.route("/disciplinaAprovacao")
@login_required
def disciplinaAprovacao():
    consulta = disciplinamaiorreprovacao.query('situacaoDisciplina == "APROVADO"')
    resultado = consulta.groupby(['disciplina']).count()
    resultado = resultado.sort_values(by=['situacaoDisciplina'], ascending =False)
    resultado = resultado.rename(columns={'situacaoDisciplina' : 'Quantidade de Aprovações'})
    return render_template('disciplinas.html',tables=[resultado.to_html(classes='table table-striped')],
    titles = ['na'])

#Situaçoes Das Disciplinas
@app.route("/disciplina")
@login_required
def disciplina():
    consulta = disciplinamaiorreprovacao.query('situacaoDisciplina == "REPROVADO"')
    resultado = consulta.groupby(['disciplina']).count()
    resultado = resultado.sort_values(by=['situacaoDisciplina'], ascending =False)
    resultado = resultado.rename(columns={'situacaoDisciplina' : 'Quantidade de Reprovações'})
    return render_template('disciplinas.html',tables=[resultado.to_html(classes='table table-striped')],
    titles = ['na'])

#Situaçoes Das Disciplinas
@app.route("/disciplinaDesistencia")
@login_required
def disciplinaDesistencia():
    consulta = disciplinamaiorreprovacao.query('situacaoDisciplina == "CANCELADO"')
    resultado = consulta.groupby(['disciplina']).count()
    resultado = resultado.sort_values(by=['situacaoDisciplina'], ascending =False)
    resultado = resultado.rename(columns={'situacaoDisciplina' : 'Quantidade de Desistência'})
    return render_template('disciplinas.html',tables=[resultado.to_html(classes='table table-striped')],
    titles = ['na'])

#Situaçoes Das Disciplinas
@app.route("/mediaMatricula")
@login_required
def mediaMatricula():
    consulta = disciplinamaiorreprovacao.query('situacaoDisciplina == "MATRICULADO"')
    resultado = consulta.groupby(['disciplina']).count()
    resultado = resultado.sort_values(by=['situacaoDisciplina'], ascending =False)
    resultado = resultado.rename(columns={'situacaoDisciplina' : 'Média de Matriculas'})
    return render_template('disciplinas.html',tables=[resultado.to_html(classes='table table-striped')],
    titles = ['na'])
