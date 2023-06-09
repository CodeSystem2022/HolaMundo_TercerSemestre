PGDMP                          {            postgres     15.3 (Ubuntu 15.3-1.pgdg22.04+1)     15.3 (Ubuntu 15.3-1.pgdg22.04+1)     c           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            d           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            e           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            f           1262    5    postgres    DATABASE     t   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'es_AR.UTF-8';
    DROP DATABASE postgres;
                postgres    false            g           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3430            �            1259    16433    vendedor    TABLE     e   CREATE TABLE public.vendedor (
    id integer NOT NULL,
    nombre character varying(50) NOT NULL
);
    DROP TABLE public.vendedor;
       public         heap    postgres    false            �            1259    16432    vendedor_id_seq    SEQUENCE     �   CREATE SEQUENCE public.vendedor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.vendedor_id_seq;
       public          postgres    false    217            h           0    0    vendedor_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.vendedor_id_seq OWNED BY public.vendedor.id;
          public          postgres    false    216            �            1259    16440    venta    TABLE     �   CREATE TABLE public.venta (
    id integer NOT NULL,
    nombre character varying(50) NOT NULL,
    id_zona integer NOT NULL,
    id_vendedor integer NOT NULL,
    fecha timestamp with time zone
);
    DROP TABLE public.venta;
       public         heap    postgres    false            �            1259    16439    venta_id_seq    SEQUENCE     �   CREATE SEQUENCE public.venta_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.venta_id_seq;
       public          postgres    false    219            i           0    0    venta_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.venta_id_seq OWNED BY public.venta.id;
          public          postgres    false    218            �            1259    16426    zona    TABLE     ]   CREATE TABLE public.zona (
    id integer NOT NULL,
    nombre character varying NOT NULL
);
    DROP TABLE public.zona;
       public         heap    postgres    false            �            1259    16425    zona_id_seq    SEQUENCE     �   CREATE SEQUENCE public.zona_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.zona_id_seq;
       public          postgres    false    215            j           0    0    zona_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.zona_id_seq OWNED BY public.zona.id;
          public          postgres    false    214            �           2604    16436    vendedor id    DEFAULT     j   ALTER TABLE ONLY public.vendedor ALTER COLUMN id SET DEFAULT nextval('public.vendedor_id_seq'::regclass);
 :   ALTER TABLE public.vendedor ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217            �           2604    16443    venta id    DEFAULT     d   ALTER TABLE ONLY public.venta ALTER COLUMN id SET DEFAULT nextval('public.venta_id_seq'::regclass);
 7   ALTER TABLE public.venta ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    219    219            �           2604    16429    zona id    DEFAULT     b   ALTER TABLE ONLY public.zona ALTER COLUMN id SET DEFAULT nextval('public.zona_id_seq'::regclass);
 6   ALTER TABLE public.zona ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215            ^          0    16433    vendedor 
   TABLE DATA           .   COPY public.vendedor (id, nombre) FROM stdin;
    public          postgres    false    217   a       `          0    16440    venta 
   TABLE DATA           H   COPY public.venta (id, nombre, id_zona, id_vendedor, fecha) FROM stdin;
    public          postgres    false    219   �       \          0    16426    zona 
   TABLE DATA           *   COPY public.zona (id, nombre) FROM stdin;
    public          postgres    false    215   y       k           0    0    vendedor_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.vendedor_id_seq', 2, true);
          public          postgres    false    216            l           0    0    venta_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.venta_id_seq', 12, true);
          public          postgres    false    218            m           0    0    zona_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.zona_id_seq', 5, true);
          public          postgres    false    214            �           2606    16438    vendedor vendedor_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.vendedor
    ADD CONSTRAINT vendedor_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.vendedor DROP CONSTRAINT vendedor_pkey;
       public            postgres    false    217            �           2606    16445    venta venta_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.venta
    ADD CONSTRAINT venta_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.venta DROP CONSTRAINT venta_pkey;
       public            postgres    false    219            �           2606    16431    zona zona_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.zona
    ADD CONSTRAINT zona_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.zona DROP CONSTRAINT zona_pkey;
       public            postgres    false    215            �           2606    16451    venta venta_id_vendedor_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.venta
    ADD CONSTRAINT venta_id_vendedor_fkey FOREIGN KEY (id_vendedor) REFERENCES public.vendedor(id);
 F   ALTER TABLE ONLY public.venta DROP CONSTRAINT venta_id_vendedor_fkey;
       public          postgres    false    217    219    3272            �           2606    16446    venta venta_id_zona_fkey    FK CONSTRAINT     v   ALTER TABLE ONLY public.venta
    ADD CONSTRAINT venta_id_zona_fkey FOREIGN KEY (id_zona) REFERENCES public.zona(id);
 B   ALTER TABLE ONLY public.venta DROP CONSTRAINT venta_id_zona_fkey;
       public          postgres    false    3270    215    219            ^      x�3��*M��2�t+R1z\\\ /FG      `   �   x�m�MR�0F��)|�K��)z 6�8���fb���:,Ja��|Oz����� �!EzTnD/0$��LpG�s�J��QR�(��:b�<��/,�ߤ�2:T�8�\{^����g[���|��I��0x�"��8�����,�/rȣV����%_������Y����Q���p��[s�Ե���"f�f�`�x�B�W�V�گ��R^*{q��a��ZT�      \   /   x�3���/*I�2�.-�2�t-rL8�SA�)�sj^IQ>W�  vE     