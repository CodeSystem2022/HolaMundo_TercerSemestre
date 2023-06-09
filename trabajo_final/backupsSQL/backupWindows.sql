PGDMP         (    
            {            postgres    15.2    15.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    5    postgres    DATABASE     �   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Latin America.1252';
    DROP DATABASE postgres;
                postgres    false                       0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3348                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false                       0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            �            1259    24789    vendedor    TABLE     a   CREATE TABLE public.vendedor (
    id integer NOT NULL,
    nombre character varying NOT NULL
);
    DROP TABLE public.vendedor;
       public         heap    postgres    false            �            1259    24788    vendedor_id_seq    SEQUENCE     �   CREATE SEQUENCE public.vendedor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.vendedor_id_seq;
       public          postgres    false    218                       0    0    vendedor_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.vendedor_id_seq OWNED BY public.vendedor.id;
          public          postgres    false    217            �            1259    24798    venta    TABLE     �   CREATE TABLE public.venta (
    id integer NOT NULL,
    nombre character varying NOT NULL,
    id_zona integer NOT NULL,
    id_vendedor integer NOT NULL,
    fecha timestamp with time zone NOT NULL
);
    DROP TABLE public.venta;
       public         heap    postgres    false            �            1259    24797    venta_id_seq    SEQUENCE     �   CREATE SEQUENCE public.venta_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.venta_id_seq;
       public          postgres    false    220                       0    0    venta_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.venta_id_seq OWNED BY public.venta.id;
          public          postgres    false    219            �            1259    24780    zona    TABLE     ]   CREATE TABLE public.zona (
    id integer NOT NULL,
    nombre character varying NOT NULL
);
    DROP TABLE public.zona;
       public         heap    postgres    false            �            1259    24779    zona_id_seq    SEQUENCE     �   CREATE SEQUENCE public.zona_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.zona_id_seq;
       public          postgres    false    216                       0    0    zona_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.zona_id_seq OWNED BY public.zona.id;
          public          postgres    false    215            q           2604    24792    vendedor id    DEFAULT     j   ALTER TABLE ONLY public.vendedor ALTER COLUMN id SET DEFAULT nextval('public.vendedor_id_seq'::regclass);
 :   ALTER TABLE public.vendedor ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218            r           2604    24801    venta id    DEFAULT     d   ALTER TABLE ONLY public.venta ALTER COLUMN id SET DEFAULT nextval('public.venta_id_seq'::regclass);
 7   ALTER TABLE public.venta ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    219    220    220            p           2604    24783    zona id    DEFAULT     b   ALTER TABLE ONLY public.zona ALTER COLUMN id SET DEFAULT nextval('public.zona_id_seq'::regclass);
 6   ALTER TABLE public.zona ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    216    216                      0    24789    vendedor 
   TABLE DATA           .   COPY public.vendedor (id, nombre) FROM stdin;
    public          postgres    false    218   �                 0    24798    venta 
   TABLE DATA           H   COPY public.venta (id, nombre, id_zona, id_vendedor, fecha) FROM stdin;
    public          postgres    false    220          
          0    24780    zona 
   TABLE DATA           *   COPY public.zona (id, nombre) FROM stdin;
    public          postgres    false    216   �                  0    0    vendedor_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.vendedor_id_seq', 1, false);
          public          postgres    false    217                       0    0    venta_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.venta_id_seq', 7, true);
          public          postgres    false    219                       0    0    zona_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.zona_id_seq', 1, false);
          public          postgres    false    215            v           2606    24796    vendedor vendedor_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.vendedor
    ADD CONSTRAINT vendedor_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.vendedor DROP CONSTRAINT vendedor_pkey;
       public            postgres    false    218            x           2606    24805    venta venta_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.venta
    ADD CONSTRAINT venta_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.venta DROP CONSTRAINT venta_pkey;
       public            postgres    false    220            t           2606    24787    zona zona_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.zona
    ADD CONSTRAINT zona_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.zona DROP CONSTRAINT zona_pkey;
       public            postgres    false    216            y           2606    24811    venta venta_id_vendedor_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.venta
    ADD CONSTRAINT venta_id_vendedor_fkey FOREIGN KEY (id_vendedor) REFERENCES public.vendedor(id);
 F   ALTER TABLE ONLY public.venta DROP CONSTRAINT venta_id_vendedor_fkey;
       public          postgres    false    220    218    3190            z           2606    24806    venta venta_id_zona_fkey    FK CONSTRAINT     v   ALTER TABLE ONLY public.venta
    ADD CONSTRAINT venta_id_zona_fkey FOREIGN KEY (id_zona) REFERENCES public.zona(id);
 B   ALTER TABLE ONLY public.venta DROP CONSTRAINT venta_id_zona_fkey;
       public          postgres    false    3188    216    220               $   x�3�t+J��2��*RƜn�)�E���\1z\\\ {�         �   x�m�1�0���9E.��v�$���\��%BD
�����CY���OO`�{_�k�#��q���S	�IP):F��^�_j�9!��2�i��q$�"�͘I~2�ܶ��s}���rp#P��)��{r�Ƙ/�(      
   /   x�3���/*I�2�.-�2�t-rL8�SA�)�sj^IQ>W�  vE     