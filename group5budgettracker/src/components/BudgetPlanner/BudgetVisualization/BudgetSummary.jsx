import { ArrowRightCircle } from "lucide-react";
import { useTheme } from "@mui/material/styles";

const BudgetSummary = ({ totalIncome, totalAllocated }) => {
  const theme = useTheme();

  return (
    <div
      style={{
        marginTop: theme.spacing(3),
        backgroundColor:
          theme.palette.mode === "light"
            ? theme.palette.info.light // e.g. blue-50 equivalent
            : theme.palette.background.paper,
        borderRadius: 32, // rounded-2xl
        padding: theme.spacing(3),
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: theme.spacing(2),
          // Add responsive grid columns with media query
        }}
        className="md:grid-cols-2"
      >
        {/* Total Income box */}
        <div
          style={{
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(2),
            borderRadius: 12,
            boxShadow:
              theme.palette.mode === "light"
                ? "0 1px 3px rgb(0 0 0 / 0.1)"
                : "0 1px 3px rgb(255 255 255 / 0.1)",
          }}
        >
          <p
            style={{
              fontSize: "0.875rem",
              color: theme.palette.text.secondary,
              marginBottom: theme.spacing(0.5),
            }}
          >
            Total Income
          </p>
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: theme.palette.text.primary,
              margin: 0,
            }}
          >
            ${totalIncome.toFixed(2)}
          </p>
        </div>

        {/* Total Allocated box */}
        <div
          style={{
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(2),
            borderRadius: 12,
            boxShadow:
              theme.palette.mode === "light"
                ? "0 1px 3px rgb(0 0 0 / 0.1)"
                : "0 1px 3px rgb(255 255 255 / 0.1)",
          }}
        >
          <p
            style={{
              fontSize: "0.875rem",
              color: theme.palette.text.secondary,
              marginBottom: theme.spacing(0.5),
            }}
          >
            Total Allocated
          </p>
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              margin: 0,
              color:
                totalAllocated > totalIncome
                  ? theme.palette.error.main
                  : theme.palette.text.primary,
            }}
          >
            ${totalAllocated.toFixed(2)}
          </p>
          <div
            style={{
              marginTop: theme.spacing(1),
              display: "flex",
              alignItems: "center",
            }}
          >
            <ArrowRightCircle
              style={{
                height: 16,
                width: 16,
                color: theme.palette.text.secondary,
                marginRight: 4,
              }}
            />
            <span
              style={{
                fontSize: "0.75rem",
                color: theme.palette.text.secondary,
              }}
            >
              {((totalAllocated / totalIncome) * 100).toFixed(1)}% of income
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetSummary;
