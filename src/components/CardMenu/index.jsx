import {
  Box,
  Card,
  Typography,
  Icon,
  Button,
  Input,
  Menu,
  MenuItem,
} from "@mui/material";
import { PiStarFourBold } from "react-icons/pi";
import { HiOutlineFolderDownload } from "react-icons/hi";
import { LuFolderOpen, LuBook } from "react-icons/lu";
import { useState, useEffect } from "react";
import axios from "axios";
import { exportCompaniesToExcel } from "../../utils/convertExcel";
import { TbFilterSearch } from "react-icons/tb";

const items = {
  1: {
    name: "Empresas",
    description: "Buscar relatórios",
    Icon: <PiStarFourBold />,
  },
  2: {
    name: "Consultar",
    description: "Buscar empresa",
    Icon: <LuFolderOpen />,
    endpoint: "http://127.0.0.1:8000/companies_sefaz",
  },
  3: {
    name: "Downloads",
    description: "Download de relatórios",
    Icon: <HiOutlineFolderDownload />,
  },
  4: {
    name: "Documentos",
    description: "Resumo documentos",
    Icon: <LuBook />,
  },
};

function FadeMenu({ data }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        +
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            exportCompaniesToExcel(data);
            handleClose();
          }}
        >
          Download Excel
        </MenuItem>
        <MenuItem onClick={handleClose}>Download PDF</MenuItem>
        <MenuItem onClick={handleClose}>Download CSV</MenuItem>
      </Menu>
    </Box>
  );
}

function Filter({ setFilter }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <TbFilterSearch size={20} />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            setFilter(1);
          }}
          key={1}
        >
          Todos
        </MenuItem>
        <MenuItem
          key={2}
          onClick={() => {
            handleClose();
            setFilter(2);
          }}
        >
          Pendências não lidas
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleClose();
            setFilter(3);
          }}
          key={3}
        >
          Inconsistencias Pendentes
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            setFilter(4);
          }}
          key={4}
        >
          Mensagens não lidas
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            setFilter(5);
          }}
          key={5}
        >
          Mensagens Lidas
        </MenuItem>
      </Menu>
    </Box>
  );
}

const CardCompany = ({ company }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 250,
        height: 150,
        display: "flex",
        flexDirection: "Column",
        justifyContent: "space-evenly",
        alignItems: "center",
        gap: 1.5,
        cursor: "pointer",
        borderRadius: 4,
        margin: 2,
      }}
    >
      <Button
        color="inherit"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "Column",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: 1.5,
          height: "100%",
          fontFamily: "Poppins",
          backgroundColor:
            company.pendencia.quantidadeInconsistenciaNaoLida > 0
              ? "#E7E7E7"
              : "",
        }}
      >
        {" "}
        <Typography
          variant="h6"
          component="div"
          textAlign="center"
          sx={{ fontWeight: 600 }}
        >
          {company.empresa.razaoSocial}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <Box>
            <Typography variant="body2" component="div" textAlign="center">
              CNPJ: {company.empresa.documento}
            </Typography>
            <Typography variant="body2" component="div" textAlign="center">
              IE: {company.empresa.inscricaoEstadual}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" component="div" textAlign="center">
              Pendências não lidas:{" "}
              {company.pendencia.quantidadeInconsistenciaNaoLida}
            </Typography>
            <Typography variant="body2" component="div" textAlign="center">
              Inconsistencias pendentes:{" "}
              {company.pendencia.quantidadeInconsistenciaPendente}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" component="div" textAlign="center">
              Mensagens não lidas: {company.analiseDte.naoLidas}
            </Typography>
            <Typography variant="body2" component="div" textAlign="center">
              Mensagens lidas: {company.analiseDte.lidas}
            </Typography>
          </Box>
        </Box>
      </Button>
    </Card>
  );
};

const Companies = ({ endpoint, filterInput, filter, data, setData }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        const response = await axios.get(endpoint, {
          cancelToken: source.token,
        });
        if (isMounted) {
          setData(response.data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          if (!axios.isCancel(err)) {
            setError(err.message);
          }
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
      source.cancel();
    };
  }, [endpoint]);

  if (loading) return <Typography variant="body1">Carregando...</Typography>;
  if (error) return <Typography color="error">Erro: {error}</Typography>;

  return (
    <Box
      sx={{
        mt: 4,
        p: 2,
        borderRadius: 2,
        maxHeight: "60vh",
        overflowY: "auto",
        gap: "10px",
        scrollbarColor: "rgba(0, 0, 0, 1) transparent",
      }}
    >
      {(() => {
        let empresasArray = data?.data ? Object.values(data.data) : [];
        const searchTerm = filterInput?.trim() || "";

        const normalizeText = (text) => {
          return text
            ?.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]/g, "");
        };
        const normalizedSearchTerm = normalizeText(searchTerm);
        
        if ( filter === 2) {
            empresasArray = empresasArray.filter((company) => company.pendencia.quantidadeInconsistenciaNaoLida !== "0")
        } else if ( filter === 3) {
            empresasArray = empresasArray.filter((company) => company.pendencia.quantidadeInconsistenciaPendente !== "0")
        } else if ( filter === 4) {
            empresasArray = empresasArray.filter((company) => company.analiseDte.naoLidas !== "0")
        } else if ( filter === 5) {
            empresasArray = empresasArray.filter((company) => company.analiseDte.lidas !== "0")
        }

        let filtered = normalizedSearchTerm
          ? empresasArray.filter((company) => {
              const empresa = company.empresa;

              const razaoSocial =
                empresa.razaoSocial?.toLowerCase() || "";
              const documento =
                empresa.documento?.toLowerCase().replace(/\D/g, "") || "";
              const inscricaoEstadual =
                empresa.inscricaoEstadual?.toLowerCase().replace(/\D/g, "") ||
                "";

              return (
                razaoSocial.includes(normalizedSearchTerm) ||
                documento.includes(normalizedSearchTerm) ||
                inscricaoEstadual.includes(normalizedSearchTerm)
              );
            })
          : empresasArray;
        

        return (
          <>
            {empresasArray.length === 0 && (
              <Typography variant="body1">
                Nenhuma empresa encontrada.
              </Typography>
            )}

            {empresasArray.length > 0 && filtered.length === 0 && (
              <Typography variant="body1" sx={{ mt: 2 }}>
                Nenhum resultado para "{filterInput}"
              </Typography>
            )}

            {filtered.map((item) => (
              <CardCompany key={item.id} company={item} />
            ))}
          </>
        );
      })()}
    </Box>
  );
};

const CardItem = ({ item, onClick }) => {
  return (
    <Card
      variant="outlined"
      onClick={onClick}
      sx={{
        p: 3,
        borderRadius: 4,
        minWidth: 250,
        height: 150,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 1.5,
        cursor: "pointer",
        transition: "all 0.2s ease",
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: 3,
          bgcolor: "action.hover",
        },
      }}
    >
      <Icon sx={{ fontSize: 32, color: "primary.main" }}>{item.Icon}</Icon>
      <Typography variant="h6" component="div" textAlign="center">
        {item.name}
      </Typography>
      <Typography variant="body2" color="text.secondary" textAlign="center">
        {item.description}
      </Typography>
    </Card>
  );
};

const CardMenu = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(1);

  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: 3,
          mb: 4,
        }}
      >
        {Object.values(items).map((item, index) => (
          <CardItem
            key={index}
            item={item}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </Box>

      {selectedItem?.endpoint && (
        <Box sx={{ mt: 4 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" gutterBottom>
              {selectedItem.name}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Filter setFilter={setFilter}/>
              <Input
                placeholder="Pesquisar"
                sx={{ width: "200px" }}
                onChange={(e) => setSearch(e.target.value)}
              />
              <FadeMenu data={data} />
            </Box>
          </Box>
          <Companies
            endpoint={selectedItem.endpoint}
            filterInput={search}
            filter={filter}
            data={data}
            setData={setData}
          />
        </Box>
      )}
    </Box>
  );
};

export default CardMenu;
