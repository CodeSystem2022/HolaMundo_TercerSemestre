package enumeraciones;

public enum Continentes {
    AFRICA(53, "1.2 millones"),
    EUROPA(46, "1.1 millones"),
    ASIA(44, "1.9 millones"),
    AMERICA(34, "150.2 millones"),
    OCEANTA(14, "1.2 millones");

    private final int paises;
    private String habitantes;

    Continentes(int paises, String habitantes) {
        this.paises = paises;
        this.habitantes = habitantes;
    }

    public int getPaises() {
        return this.paises;
    }

    public String getHabitantes() {  // permite acceder al atributo habitantes
        return this.habitantes;
    }

}
