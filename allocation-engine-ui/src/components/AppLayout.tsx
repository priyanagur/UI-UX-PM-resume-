// src/components/AppLayout.tsx

import React from 'react';
import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn'; 

// Define the type for the component's props
interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* 1. The Fixed Top Header (AppBar) */}
      <AppBar position="fixed" component="nav">
        <Toolbar>
          
          {/* Branding: Icon and Title */}
          <AssignmentTurnedInIcon sx={{ mr: 1 }} />
          <Typography 
            variant="h6" 
            noWrap 
            component="a" 
            href="/" // Link back to the home page
            sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
          >
            **Smart Allocation Engine**
          </Typography>
          
          {/* User/Settings Placeholder */}
          <Box>
            <Typography variant="body1" sx={{ color: 'white' }}>
              Coordinator
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* 2. The Main Content Area */}
      <Box
        component="main"
        // Adjusts the top margin to push content below the fixed AppBar (standard AppBar height is ~64px)
        sx={{ 
          flexGrow: 1, 
          p: 3, 
          mt: 8, 
          width: '100%',
          bgcolor: 'background.default'
        }}
      >
        {children} {/* This renders the content of the active page */}
      </Box>
      
      {/* Optional: Simple Footer */}
      <Box component="footer" sx={{ p: 2, bgcolor: 'grey.200', textAlign: 'center' }}>
          <Typography variant="caption" color="text.secondary">
              © 2025 AI Allocation Engine
          </Typography>
      </Box>
      
    </Box>
  );
};

export default AppLayout;