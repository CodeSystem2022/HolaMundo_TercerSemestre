from app.usuario import *
from static.constantes import *


def login():
    nombre_usuario = input("Ingrese el nombre de usuario: ")
    contraseña = input("Ingrese la contraseña: ")
    usuario = establecer_usuario(nombre_usuario, contraseña)
    return usuario.iniciar_sesion(nombre_usuario, contraseña)


def establecer_usuario(nombre_usuario, contraseña):
    usuario = Usuario(nombre_usuario, contraseña)
    return usuario
